import {CohereClient} from 'cohere-ai'
import {db} from '@/db'
import {asc, desc, eq, getTableColumns} from 'drizzle-orm'
import {chunks, type Chunk, documents, type Document} from '@/db/schema'
import {l2Distance, cosineDistance, sql} from 'drizzle-orm'
import logger from '@/lib/logger'
import {findExactMatches} from '@/lib/retrieval/full-text-search'
import {performance} from 'node:perf_hooks'

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
})

export async function keywordSearchForChunks(
    keyPhrases: Array<string>,
    count: number
): Promise<Array<Omit<Chunk, 'embedding'> & {document: Omit<Document, 'contents'> | null}>> {
    if (!keyPhrases.length) return []

    logger.debug(`Performing "strict" search for keywords & phrases:`, keyPhrases)
    const results = await findExactMatches(keyPhrases, chunks, chunks.contextualContent, count)
    logger.debug(`Keyword search returned ${results.length} chunks out of ${count} limit`)
    return results

}


/**
 * Do cosine distance search for chunks
 * @param queryEmbedding
 * @param maxChunks
 * @returns chunks sorted by most relevent to least relevant
 */
export async function cosineDistanceSearchForChunks(
    queryEmbedding: Array<number>,
    maxChunks: number = 50
): Promise<Array<Omit<Chunk & { cosineDistance: number, document: Omit<Document, 'contents'> | null }, 'embedding'>>> {

    logger.debug(`Starting cosine search for chunks...`)
    const {embedding, ...columns} = getTableColumns(chunks) // we don't want to see embeddings in query results
    const {contents, ...documentColumns} = getTableColumns(documents)

    const start = performance.now()

    const result = await db.select({
        ...columns,
        cosineDistance: sql<number>`${cosineDistance(chunks.embedding, queryEmbedding)}`.as('cosine_distance'),
        document: documentColumns
    })
        .from(chunks)
        .orderBy(t => asc(t.cosineDistance))
        .leftJoin(documents, eq(chunks.documentId, documents.path))
        .limit(maxChunks)

    const end = performance.now()
    logger.verbose(`cosine distance search finishd in ${Math.floor(end - start)} ms`)
    logger.verbose(`Top cosine distance chunks:`, result.slice(0, 5))
    return result
}

/**
 * Search for chunks based on the euclidean distance
 * @param queryEmbedding
 * @param maxChunks
 * @returns chunk
 */
export async function euclideanDistanceSearchForChunks(
    queryEmbedding: Array<number>,
    maxChunks: number = 50
): Promise<Array<Omit<Chunk & { l2Distance: number, document: Omit<Document, 'contents'> | null }, 'embedding'>>> {

    logger.debug(`starting euclidean distance search...`)
    const {embedding, ...columns} = getTableColumns(chunks) // we don't want to see embeddings in query results
    const {contents, ...documentColumns} = getTableColumns(documents)
    const start = performance.now()

    const result = await db.select({
        ...columns,
        l2Distance: sql<number>`${l2Distance(chunks.embedding, queryEmbedding)}`.as('l2_distance'),
        document: documentColumns
    })
        .from(chunks)
        .orderBy(t => asc(t.l2Distance))
        .leftJoin(documents, eq(chunks.documentId, documents.path))
        .limit(maxChunks)

    const end = performance.now()
    logger.debug(`Euclidean distance search finished in ${Math.floor(end - start)} ms`)
    logger.debug(`Top euclidean distance chunks:`, result.slice(0, 5))
    return result
}

/**
 * Get chunks matching the query and/or keyphrases
 * @param query
 * @param keyPhrases
 * @param count
 */
export async function findChunks(
    query: string,
    keyPhrases: Array<string>,
    count: number = 20
): Promise<Array<Omit<Chunk & { document: Omit<Document, 'contents'> | null }, 'embedding'>>> {
    logger.verbose(`Searching for chunks for query ${query} and keywords: `, keyPhrases)

    const queryEmbedding: Array<number> = await getQueryEmbedding(query)
    const resultBuckets = await Promise.allSettled([
        cosineDistanceSearchForChunks(queryEmbedding, 50),
        euclideanDistanceSearchForChunks(queryEmbedding, 50),
        keywordSearchForChunks(keyPhrases, 50) // 50 and will be re-ranked
    ])

    // De-duplicate
    let duplicates: number = 0
    const deduped: Record<string, Omit<Chunk, 'embedding'>  & {document: Omit<Document, 'contents'> | null}> = {}
    const documents: Record<string, Array<Omit<Chunk, 'embedding'>>> = {}
    resultBuckets.forEach((bucket) => {
        if (bucket.status === 'rejected') {
            logger.error(`Search result failed:`, bucket.reason)
            return
        }
        bucket.value.forEach(c => {
            if (c.id in deduped) {
                duplicates++
            }
            else {
                deduped[c.id] = c
                if (c.documentId in documents) documents[c.documentId].push(c)
                else documents[c.documentId] = [c]
            }

        })
    })

    const top5Documents = Object.keys(documents)
        .map(docId => ({
            id: docId,
            documents: documents[docId]
        }))
        .sort((a, b) => b.documents.length - a.documents.length)
        .slice(0, 5)


    // Track duplicates and common documents
    logger.info(`Found ${duplicates} duplicate chunks across ${resultBuckets.length} searches for ${Object.keys(deduped).length} unique resules`)
    logger.info(`Top 5 documents: `, top5Documents.map(d => ({id: d.id, chunksRetrieved: d.documents.length})))

    // TODO: re-rank implementation
    const topNDocuments = await rerankRetrievedChunks(
        query,
        Object.values(deduped),
        count
    )

    // TODO join on documents to get document paths

    // TODO: consider returning the top-k most-releveant document e.g. if multiple chunks come from 1
    return topNDocuments
}

/**
 * Create a query embedding using cohere
 * @param query
 */
async function getQueryEmbedding(query: string): Promise<Array<number>> {
    const embedResult = await cohere.v2.embed({
        texts: [query],
        model: 'embed-english-v3.0',
        inputType: 'search_query',
        embeddingTypes: ['float']
    })

    const embeddings = embedResult.embeddings.float
    if (!embeddings || !embeddings.length) throw new Error(`Failed to embed query for image search`)
    return embeddings[0]
}


/**
 * Re-rank de-duplicated chunks by relevance. ensure you de-duplicated BEFORE using this.
 * @param query
 * @param chunks
 * @param topN
 */
async function rerankRetrievedChunks(
    query: string,
    chunks: Array<Omit<Chunk, 'embedding'> & {document: Omit<Document, 'contents'> | null}>,
    topN: number = 20
): Promise<Array<Omit<Chunk, 'embedding'> & { document: Omit<Document, 'contents'> | null }>> {

    logger.debug(`Reranking retrieved chunks...`)
    const start = performance.now()
    const rerankResult = await cohere.v2.rerank({
        model: 'rerank-english-v3.0',
        query: query,
        topN: topN,
        returnDocuments: false,
        documents: chunks.map(c => c.contextualContent || '')
    })
    logger.debug(`rerank result:`, rerankResult)

    // Results contain the index in the source array, and the relevance score
    const topNDocuments = rerankResult.results.map(
        ({index, relevanceScore}: { index: number, relevanceScore: number }) => {
            logger.silly(`Relevant: ${relevanceScore}, document: `, chunks[index])
            return chunks[index]
        })
    const end = performance.now()
    logger.debug(`Reranked retrieved documents in ${Math.floor(end - start)} ms`)

    return topNDocuments
}
