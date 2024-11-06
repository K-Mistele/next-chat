import type {NewChunk, NewImage} from '@/db/schema'
import {
    cacheContextualizedChunk,
    cacheImgEmbedding,
    loadCachedChunkEmbedding,
    loadCachedImgEmbedding,
    storeChunkEmbedding
} from './redis'
import {CohereClient} from 'cohere-ai'
import {ContextualizedChunk, DocumentWithChunks, DocumentWithContextualizedChunks} from './types'
import logger from '@/lib/logger'

const MAX_EMBEDDINGS_AT_ONCE = 96

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
})

export async function embedImages(images: Array<{ url: string, alt: string, path: string }>): Promise<Array<NewImage>> {

    let imagesToEmbed: Array<{ url: string, alt: string, path: string }> = []
    const completedImages: Array<NewImage> = []

    let newEmbeddingsCount: number = 0;
    let cacheHitsCount: number = 0;

    for (let i = 0; i < images.length; i++) {
        const embedding = await loadCachedImgEmbedding(images[i].url)
        if (embedding) {
            completedImages.push({
                embedding,
                url: images[i].url,
                documentPath: images[i].path,
                alt: images[i].alt
            })
            cacheHitsCount++
        }
        else {
            imagesToEmbed.push(images[i])

            // if we're at 96 buffered images to embed, make the request
            if (imagesToEmbed.length % MAX_EMBEDDINGS_AT_ONCE === 0 || i == images.length - 1) {

                logger.info(`Calcuating ${imagesToEmbed.length} new embeddings at index ${i} out of ${images.length}`)
                //  run the embedding
                const result = await cohere.v2.embed({
                    texts: images.map(img => img.alt),
                    model: 'embed-english-v3.0',
                    inputType: 'search_document',
                    embeddingTypes: ['float'],
                })

                // add them to the list and trigger caching

                const imagesWithEmbeddings =
                    imagesToEmbed.map((img, idx) => {

                        const floatEmbeddings = result.embeddings.float
                        if (!floatEmbeddings) throw new Error(`MISSING FLOAT EMBEDDINGS`)
                        const embedding = floatEmbeddings[idx]
                        return {
                            embedding,
                            url: img.url,
                            documentPath: img.path,
                            alt: img.alt
                        }
                    })
                completedImages.push(...imagesWithEmbeddings)
                await Promise.all(imagesWithEmbeddings.map(img => cacheImgEmbedding(img.url, img.embedding)))
                newEmbeddingsCount += imagesWithEmbeddings.length
                // reset the list of images to embed
                imagesToEmbed = []
            }
        }
    }

    logger.info(`Found ${cacheHitsCount} cached image alt embeddings already`)
    logger.info(`Calculated ${newEmbeddingsCount} new embeddings`)
    return completedImages
}


export async function embedChunks(docsWithContextualizedChunks: Array<DocumentWithContextualizedChunks>): Promise<Array<NewChunk>> {

    let maxChunksPerDocument = 0;
    const chunkCount = docsWithContextualizedChunks.reduce<number>(
        (previousValue, currentValue, index) => {
            if (currentValue.chunks.length > maxChunksPerDocument) {
                maxChunksPerDocument = currentValue.chunks.length
            }
            return previousValue + currentValue.chunks.length
        },
        0
    )
    logger.debug(`There are ${chunkCount} total chunks, it will take ${Math.ceil(chunkCount / 96) + 1} requests to embed`)
    logger.debug(`larger number of chunks in a single document:`, maxChunksPerDocument)

    // Flatmap the documents with contextual chunks to NewChunk
    const chunksToEmbed: Array<NewChunk> = docsWithContextualizedChunks.reduce<Array<NewChunk>>(
        (
            previousValue: Array<NewChunk>,
            document: DocumentWithContextualizedChunks,
            currentIndex: number
        ) => {

            const newChunks = document.chunks.map((c: ContextualizedChunk, index: number): NewChunk => ({

                id: c.id,
                originalContent: c.pageContent,
                contextualContent: c.contextualizedContent,
                documentId: document.path,
                chunkIndex: index, // index of chunk in document
                embedding: [] // TODO this actually will still need to be calculated
            }))

            previousValue.push(...newChunks)
            return previousValue
        },
        [] satisfies Array<NewChunk> // start with empty array
    )

    // array to buffer up to MAX_EMBEDDINGS_AT_ONCE chunks before runnign embeddings on them
    let bufferOfPendingChunks: Array<NewChunk> = []

    // The array that stores chunks once they have finished being embedded
    const embeddedChunks: Array<NewChunk> = []

    // Cache data
    let chunkCacheHits: number = 0;
    let chunkCacheMisses: number = 0;
    let newEmbeddings: number = 0;

    logger.debug(`Calculating chunk embeddings...`)
    for (let i = 0; i < chunksToEmbed.length; i++) {
        const chunk = chunksToEmbed[i]
        const chunkEmbedding = await loadCachedChunkEmbedding(chunk.id, chunk.contextualContent || '')
        if (chunkEmbedding) {
            chunkCacheHits++
            embeddedChunks.push({
                ...chunk,
                embedding: chunkEmbedding
            })
        }
        else {
            chunkCacheMisses++
            bufferOfPendingChunks.push(chunk)

            if (bufferOfPendingChunks.length % MAX_EMBEDDINGS_AT_ONCE === 0 || i === chunksToEmbed.length - 1) {
                logger.info(`Calculating ${bufferOfPendingChunks.length} new embeddings at index ${i} of ${chunksToEmbed.length}`)
                const result = await cohere.v2.embed({
                    texts: bufferOfPendingChunks.map(c => c.contextualContent || c.originalContent || ''),
                    model: 'embed-english-v3.0',
                    inputType: 'search_document',
                    embeddingTypes: ['float']
                })

                const chunksWithEmbeddings = bufferOfPendingChunks.map((chunk, index) => ({
                    ...chunk,
                    embedding: result.embeddings.float![index]
                }))
                embeddedChunks.push(...chunksWithEmbeddings)
                await Promise.all(chunksWithEmbeddings.map(chunk => storeChunkEmbedding(chunk.id, chunk.contextualContent || '', chunk.embedding)))
                logger.debug(`Cached embeddings!`)
                newEmbeddings += embeddedChunks.length
                bufferOfPendingChunks = []
            }
        }
    }

    logger.info(`Finished calculating chunk embeddings with ${chunkCacheMisses} cache misses and ${chunkCacheHits} cache hits`)
    logger.info(`New embeddings: ${newEmbeddings}`)

    return embeddedChunks
}