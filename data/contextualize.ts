import {generateText} from 'ai'
import {openai} from '@ai-sdk/openai'

import {ContextualizedChunk, DocumentWithChunks, DocumentWithContextualizedChunks, LangchainChunk} from './types'
import {cacheContextualizedChunk, loadCachedContextualizedChunk} from './redis'

const gpt4oMini = openai('gpt-4o-mini')


function buildPrompt(document: string, chunk: string) {
    return `
    Here is a document enclosed in <document></document> XML tags. 
    <document>
    ${document}
    </document>
    Here is a chunk we want to situate within the whole document:
    <chunk>
    ${chunk}
    </chunk>
    
    Please give a short succinct context to situate this chunk within the overall document for the purposes of improving 
    search retrieval of the chunk. Answer only with the succinct context and nothing else.
    `
}

function sliceArrayIntoParts<T>(array: Array<T>, numParts: number): Array<Array<T>> {
    const result = [];
    const partSize = Math.ceil(array.length / numParts); // Calculate size of each part

    for (let i = 0; i < numParts; i++) {
        const start = i * partSize;
        const end = start + partSize;
        const part = array.slice(start, end); // Use slice to get part of the array
        result.push(part);
    }

    return result;
}

/**
 * Contextualize a chunk with its' document
 * @param docContent
 * @param chunkContent
 */
export async function contextualizeChunk(docContent: string, chunkContent: string): Promise<string> {

    const prompt = buildPrompt(docContent, chunkContent)

    const {text, experimental_providerMetadata} = await generateText({
        model: gpt4oMini,
        prompt: prompt,
        temperature: 0.7,
    })
    //console.log(`metadata:`, experimental_providerMetadata) // show prompt cache tokens
    return text
}

export async function contextualizeChunks(docsWithChunks: Array<DocumentWithChunks>): Promise<Array<DocumentWithContextualizedChunks>> {

    const allDocs: Array<DocumentWithContextualizedChunks> = []

    const documentGroups = sliceArrayIntoParts<DocumentWithChunks>(
        docsWithChunks,
        60 // 60 parts, 613 documents -> groups of 10 documents
    )

    let contextCacheMisses: number = 0;
    let contextCacheHits: number = 0;

    for (let k = 0; k < documentGroups.length; k++) {

        console.log(`Starting on document group ${k} of ${documentGroups.length}`)
        const docGroup = documentGroups[k]
        const documentPromises = docGroup.map(async (doc, idx: number): Promise<DocumentWithContextualizedChunks> => {
            console.log(`Starting processing for document ${idx} (misses: ${contextCacheMisses}, hits: ${contextCacheHits})`)

            const startCacheMisses = contextCacheMisses
            const startCacheHits = contextCacheHits

            const contextualizedChunksForDocument: Array<ContextualizedChunk> = []

            // loop over chunks in doc one at a time
            for (let i = 0; i < doc.chunks.length; i++) {

                const chunk = doc.chunks[i]
                const chunkId = `chunk_lines_${chunk.metadata.loc.lines.from}_to_${chunk.metadata.loc.lines.to}_from_doc_${doc.path}`
                const cachedChunkContext = await loadCachedContextualizedChunk(chunkId)

                // cache hit for chunk
                if (cachedChunkContext) {
                    contextCacheHits++
                    contextualizedChunksForDocument.push({
                        ...chunk,
                        id: chunkId,
                        contextualizedContent: cachedChunkContext
                    })
                }
                // cache miss for chunk
                else {
                    contextCacheMisses++
                    const context = await contextualizeChunk(doc.contents || '', chunk.pageContent)

                    await cacheContextualizedChunk(chunkId, context)
                    contextualizedChunksForDocument.push({
                        ...chunk,
                        contextualizedContent: `${context}\n\n${chunk.pageContent}`,
                        id: chunkId
                    })
                }
            }

            // Chunks finished processing
            console.log(`After document ${idx}, there were ${contextCacheMisses - startCacheMisses} new cache misses`)
            console.log(`After document ${idx}, there were ${contextCacheHits - startCacheHits} new cache hits`)

            return {
                ...doc,
                chunks: contextualizedChunksForDocument
            }
        })
        const groupResults = await Promise.all(documentPromises)
        allDocs.push(...groupResults)
        console.log(`finished document group ${k} of ${documentGroups.length}`)
    }


    console.log(`Total cache hits:`, contextCacheHits)
    console.log(`Total cache misses: `, contextCacheMisses)
    return allDocs
}