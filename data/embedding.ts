import type {NewChunk, NewImage} from '@/db/schema'
import {cacheImgEmbedding, loadCachedImgEmbedding} from './redis'
import {CohereClient} from 'cohere-ai'
import {DocumentWithChunks} from './types'

const MAX_EMBEDDINGS_AT_ONCE = 96

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY
})

export async function embedImages(images: Array<{url: string, alt: string, path: string}>): Promise<Array<NewImage>> {

    let imagesToEmbed: Array<{url: string, alt: string, path: string}> = []
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

                console.log(`Calcuating ${imagesToEmbed.length} new embeddings at index ${i} out of ${images.length}`)
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

    console.log(`Found ${cacheHitsCount} cached image alt embeddings already`)
    console.log(`Calculated ${newEmbeddingsCount} new embeddings`)
    return completedImages
}


export async function embedChunks(chunks: Array<DocumentWithChunks>): Promise<Array<NewChunk>> {


    return []
}