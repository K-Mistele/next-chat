import {CohereClient} from 'cohere-ai'
import {db} from '@/db'
import {images, type Image} from '@/db/schema'
import {l2Distance} from 'drizzle-orm'
import logger from '@/lib/logger'

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
})

export async function semanticSearchForImages(query: string): Promise<Array<Image>> {

    // TODO similarity search
    logger.verbose(`Semantic searching for images with alt text matching query: "${query}"`)
    const embedResult = await cohere.v2.embed({
        texts: [query],
        model: 'embed-english-v3.0',
        inputType: 'search_query',
        embeddingTypes: ['float']
    })

    const embeddings = embedResult.embeddings.float
    if (!embeddings || !embeddings.length) throw new Error(`Failed to embed query for image search`)
    const queryEmbedding = embeddings[0]

    const results = await db.select({
        url: images.url,
        alt: images.alt,
        documentPath: images.documentPath,
        embedding: images.embedding,
        distance: l2Distance(images.embedding, queryEmbedding)
    })
        .from(images)
        .orderBy(l2Distance(images.embedding, queryEmbedding))
        .limit(16)

    logger.verbose("Image semantic search finished")
    return results

}

export async function keywordSearchForImages(keywords: Array<string>): Promise<Array<Image>> {
    // TODO keyword search
    if (!keywords.length) return [] satisfies  Array<Image>

    return [] satisfies Array<Image>
}

export async function findImages(query: string, keywords: Array<string>): Promise<Array<Image>> {

    logger.info(`Searching for images for query ${query}`)

    const results  = await Promise.allSettled([
        semanticSearchForImages(query),
        keywordSearchForImages(keywords)
    ])

    const searchResults = results.reduce((
        accumulator: Array<Image>,
        current: PromiseSettledResult<Array<Image>>,
        idx: number
    ) => {
        if (current.status === 'fulfilled') {
            logger.debug(`Got ${current.value.length} image search results`)
            accumulator.push(...current.value)
        }
        else {
            logger.error(`Image search failed with error:`, current.reason)
        }
        return accumulator
    }, [] satisfies Array<Image>)

    logger.info(`Found images:`, searchResults.map(result => ({
        url: result.url,
        alt: result.alt,
        documentPath: result.documentPath,
        // @ts-expect-error - it's there
        distance: result.distance
    })))
    // TODO de-duplicate

    // TODO re-rank - e.g. re-ranker or reciprocal rank fusion

    return searchResults.slice(0, 8)

}