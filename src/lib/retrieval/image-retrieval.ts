// Retrieval: https://www.postgresql.org/docs/17/functions-textsearch.html

import {CohereClient} from 'cohere-ai'
import {db} from '@/db'
import {sql} from 'drizzle-orm'
import {images, type Image} from '@/db/schema'
import {l2Distance, SQL} from 'drizzle-orm'
import logger from '@/lib/logger'
import {findExactMatches} from '@/lib/retrieval/full-text-search'

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
})

/**
 * Use vector embeddings search to search for images against their alt text
 * NOTE that this does not seem to be very effective due to the short length; keyword search probably performs better
 * @param query
 */
export async function semanticSearchForImages(query: string): Promise<Array<Image & { distance: number }>> {

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
        distance: l2Distance(images.embedding, queryEmbedding) as SQL<number>
    })
        .from(images)
        .orderBy(l2Distance(images.embedding, queryEmbedding))
        .limit(16)

    logger.verbose(
        "Image semantic search finished:",
        results.map(img => ({url: img.url, alt: img.alt, distance: img.distance}))
    )
    return results

}

/**
 * Perform keyword/phrase search to find relevant images; does a waterfall:
 * 1. Look for
 * @param keyPhrases
 */
export async function keywordSearchForImages(keyPhrases: Array<string>): Promise<Array<Image>> {
    // TODO keyword search
    if (!keyPhrases.length) return [] satisfies  Array<Image>

    logger.verbose(`Performing "strict" search for keywords & phrases:`, keyPhrases)
    const results = await findExactMatches(keyPhrases, images, images.alt, 8)


    return [] satisfies Array<Image>
}

export async function findImages(query: string, keywords: Array<string>): Promise<Array<Image>> {

    logger.info(`Searching for images for query ${query}`)

    const results = await keywordSearchForImages(keywords)
    return results

}