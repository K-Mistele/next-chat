
import { CohereClient} from 'cohere-ai'
import {db} from '@/db'
import {asc, desc, getTableColumns} from 'drizzle-orm'
import {chunks, type Chunk} from '@/db/schema'
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
): Promise<Array<Omit<Chunk, 'embedding'>>> {
    if (!keyPhrases.length) return []

    logger.debug(`Performing "strict" search for keywords & phrases:`, keyPhrases)
    const results = await findExactMatches(keyPhrases, chunks, chunks.contextualContent, count)
    logger.debug(`Keyword search returned ${results.length} chunks out of ${count} limit`)
    return results

}

/**
 * Conduct similarity search using cosine and l2 distance; time both and calculate the difference in results
 * @param query
 * @param limit
 */
export async function semanticSearchForChunks(
    query: string,
    limit: number
): Promise<Array<Omit<Chunk, 'embedding'>>> {

    logger.debug(`Semantic searching for chunks matching query`, query)

    // Calculate the embedding
    const embedResult = await cohere.v2.embed({
        texts: [query],
        model: 'embed-english-v3.0',
        inputType: 'search_query',
        embeddingTypes: ['float']
    })
    const embeddings = embedResult.embeddings.float
    if (!embeddings || !embeddings.length) throw new Error(`Failed to embed query for image search`)
    const queryEmbedding = embeddings[0]

    const {embedding, ...columns} = getTableColumns(chunks) // we don't want to see embeddings in query results
    const l2DistanceQuery = new Promise<Array<Omit<Chunk & {l2Distance: number}, 'embedding'>>>(resolve => {

        const start = performance.now()
        db.select({
            ...columns,
            l2Distance: sql<number>`${l2Distance(chunks.embedding, queryEmbedding)}`.as('l2_distance'),
        })
            .from(chunks)
            .orderBy(t => asc(t.l2Distance))
            .limit(50)
            .then(result => {

                const end = performance.now()
                logger.verbose(`L2 distance search finished in ${Math.floor(end - start)} ms`)
                resolve(result)
            })
    })



    const cosineDistanceQuery = new Promise<Array<Omit<Chunk & {cosineDistance: number}, 'embedding'>>>(resolve => {
        const start = performance.now()
        db.select({
            ...columns,
            cosineDistance: sql<number>`${cosineDistance(chunks.embedding, queryEmbedding)}`.as('cosine_dinstance')
        })
            .from(chunks)
            .orderBy(t => asc(t.cosineDistance))
            .limit(50)
            .then(result => {
                const end = performance.now()
                logger.verbose(`Cosine distance finished in ${Math.floor(end - start)} ms `)
                resolve(result)
            })
    })

    const [l2DistanceResults, cosineDistanceResults] = await Promise.all([l2DistanceQuery, cosineDistanceQuery])

    logger.debug(`L2 distance results:`, l2DistanceResults.map(c => ({
        doc: c.documentId,
        idx: c.chunkIndex,
        ctxContent: c.contextualContent,
        origContent: c.originalContent,
        l2Distance: c.l2Distance
    })))

    logger.debug(`cosine distance results:`, cosineDistanceResults.map(c => ({
        doc: c.documentId,
        idx: c.chunkIndex,
        ctxContent: c.contextualContent,
        origContent: c.originalContent,
        cosineDistance: c.cosineDistance
    })))

    // NOTE needs to be de-duplicated
    return [
        ...cosineDistanceResults,
        ...l2DistanceResults
    ]

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
    count: number=10
): Promise<Array<Omit<Chunk, 'embedding'>>> {
    logger.verbose(`Searching for chunks for query ${query} and keywords: `, keyPhrases)

    const [semanticSearchResult, keywordSearchResult] = await Promise.allSettled([
        semanticSearchForChunks(query, count),
        keywordSearchForChunks(keyPhrases, 50) // 50 and will be re-ranked
    ])

    // De-duplicate
    const deduped: Record<string, Omit<Chunk, 'embedding'>> = {}
    if (semanticSearchResult.status === 'fulfilled') {
        semanticSearchResult.value.forEach(c => {deduped[c.id] = c})
    }
    if (keywordSearchResult.status === 'fulfilled') {
        keywordSearchResult.value.forEach(c => {deduped[c.id] = c})
    }

    // NOTE we need to also filter into buckets for RRF
    // TODO RRF once de-duplicated; may need to do embedding here and have separate functions for L2 vs. cosine

    // TODO re-rank as well; see which is better

    if (semanticSearchResult.status === 'fulfilled') {
        return semanticSearchResult.value
    }
    else {
        return []
    }
}

