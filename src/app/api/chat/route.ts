import {
    type CoreMessage,
    streamText,
    JSONValue,
    createDataStreamResponse,
    NoSuchToolError,
    InvalidToolArgumentsError,
    ToolExecutionError,
} from 'ai'
import {openai} from '@ai-sdk/openai'
import {ragInstruction, systemPrompt} from '@/lib/ai/system-prompt'
import logger from '@/lib/logger'
import {rewriteQuery} from '@/lib/ai/agents/query-rewriter'
import {getMessageTextContent} from '@/lib/ai/utils'
import {extractKeywords} from '@/lib/ai/agents/keyword-extractor'
import type {Source, StreamedDataMessage} from '@/lib/ai/types'
import {Chunk, type Document, Image} from '@/db/schema'
import {findImages} from '@/lib/retrieval/image-retrieval'
import {findChunks} from '@/lib/retrieval/chunk-retrieval'
import {rateLimiterShouldAllowRequest} from '@/lib/rate-limit'

export async function POST(request: Request) {

    // TODO need to use the data stream protoocl to start streaming before we start generating
    const {messages}: { messages: CoreMessage[] } = await request.json()

    const shouldAllowRequest = await rateLimiterShouldAllowRequest(request)
    if (!shouldAllowRequest) return Response.json({type: 'error', error: `Too many requests. Please back off.`}, {status: 429})

    return createDataStreamResponse({
        execute: async (dataStream) => {
            const [lastUserMessage] = messages.filter(message => message.role === "user").slice(-1);
            const userQuery = getMessageTextContent(lastUserMessage)

            const start = performance.now()

            // rewrite for RAG purposes
            dataStream.writeData({type: 'statusUpdate', status: 'optimizing'} satisfies StreamedDataMessage)
            const rewrittenQuery = new Promise<string>((resolve) => {
                rewriteQuery(userQuery)
                    .then((rewrittenQuery: string) => {
                        if (!rewrittenQuery || !rewrittenQuery.length) throw new Error(`Rewritten query has no length!`)
                        dataStream.writeData({
                            type: 'rewrittenQuery',
                            query: rewrittenQuery
                        } satisfies StreamedDataMessage)
                        resolve(rewrittenQuery)
                    })
                    .catch((err: any) => {
                        logger.error(`Error rewriting query: `, err)
                        dataStream.writeData({
                            type: 'rewrittenQuery',
                            query: userQuery
                        } satisfies StreamedDataMessage)
                        resolve(userQuery)
                    })
            })

            // Extract keywords; stream to client
            const keywords = new Promise<Array<string>|null>((resolve) => {
                // extract keywrods for keyword-based search
                extractKeywords(userQuery)
                    .then((keywords: Array<string>) => {
                        if (!keywords.length) {
                            logger.error(`Failed to extract any keywords!`)
                            resolve(null)
                        }
                        else {
                            dataStream.writeData({
                                type: 'extractedKeywords',
                                keywords
                            } satisfies StreamedDataMessage)
                            resolve(keywords)
                        }
                    })
                    .catch(err => {
                        logger.error(`Error extracting keywords: `, err)
                        resolve(null)
                    })
            })

            // Promise to retrieve images; sends the data when it has been resolved
            // Depends on rewritten query and keywords
            const imagesPromise = new Promise<Array<Omit<Image, 'embedding'>>>((resolve) => {
                Promise.all([rewrittenQuery, keywords])
                    .then(([query, keywords]: [string, Array<string> | null]) => {
                        findImages(query, keywords || [])
                            .then(images => {
                                const imageData = images.map(img => ({
                                    url: img.url,
                                    alt: img.alt || ''
                                }))
                                dataStream.writeData({
                                    type: 'relatedImages',
                                    imageData
                                } satisfies StreamedDataMessage)
                                logger.info(`Images streamed to client:`, imageData)
                                resolve(images)
                            })
                            .catch((err: any) => {
                                logger.error(`Failed to retrieve images:`, err)
                                resolve([])
                            })
                    })
                    .catch((err: any) => {
                        logger.error(`Unable to retrieve query and keywords for image retrieval:`, err)
                        resolve([])
                    })
            })

            const chunksPromise = new Promise<Array<Omit<Chunk, 'embedding'> & {document: Omit<Document, 'contents'> | null}>>((resolve) => {
                Promise.all([rewrittenQuery, keywords])
                    .then(([rewrittenQuery, keywords]: [string, Array<string> | null]) => {

                        // Notify the client that we are not waiting on researching
                        dataStream.writeData({
                            type: 'statusUpdate',
                            status: 'researching'
                        } satisfies StreamedDataMessage)
                        const intermediate = performance.now()
                        findChunks(rewrittenQuery, keywords || [], 20)
                            .then((chunks: Array<Omit<Chunk, 'embedding'> & {document: Omit<Document, 'contents'>|null}>)=> {
                                dataStream.writeData({
                                    type: 'sources',
                                    sources: normalizeChunksWithDocumentsToSources(chunks).slice(0, 10) // SHORT
                                } satisfies StreamedDataMessage)

                                // Notify the client we're generating now
                                dataStream.writeData({
                                    type: 'statusUpdate',
                                    status: 'generating'
                                } satisfies  StreamedDataMessage)
                                const end = performance.now()
                                logger.info(`Took ${Math.floor(intermediate-start)} ms from request start to get rewritten query and keywords`)
                                logger.info(`Took ${Math.floor(end - intermediate)} ms from receiving search terms to stream chunks`)
                                logger.info(`Took ${Math.floor(end - start)} ms from request start to stream chunks`)
                                resolve(chunks)
                            })
                            .catch((err: any) => {
                                logger.error(`Failed to retrieve chunks:`, err)
                                dataStream.writeData({
                                    type: 'sources',
                                    sources: []
                                } satisfies StreamedDataMessage)
                                resolve([])
                            })
                    })
                    .catch((err: any) => {
                        logger.error(`Unable to retrieve query and chunks for image retrieval`, err)
                        dataStream.writeData({
                            type: 'sources',
                            sources: []
                        } satisfies StreamedDataMessage)
                    })
            })

            // TODO actually do generation with the chunks
            const chunks = await chunksPromise

            // call data.append({...}) to add data to the stream
            // call data.appendMessageAnnotation to add to a message
            const result = streamText({
                model: openai('gpt-4o-mini'),
                system: 'You are a helpful assistant',
                messages: [
                    {role: `system`, content: systemPrompt},
                    ...messages,
                    {
                        role: 'user',
                        content: ragInstruction(chunks)
                    }
                ],
                onFinish: () => {
                    dataStream.writeData({type: 'statusUpdate', status: 'done'} satisfies StreamedDataMessage)
                }
            })

            // merge the streamed text into the data stream
            result.mergeIntoDataStream(dataStream)


        },
        onError: (error) => {
            if (NoSuchToolError.isInstance(error)) {
                logger.error(`No such tool error:`, error)
            }
            else if (InvalidToolArgumentsError.isInstance(error)) {
                logger.error(`Invalid tool arguments error:`, error)
            }
            else if (ToolExecutionError.isInstance(error)) {
                logger.error(`Tool execution error:`, error)
            }
            // de-mask errors since they are hidden from the client by default for security reasons.
            return error instanceof  Error ? error.message : String(error)
        }
    })

}

function normalizeChunksWithDocumentsToSources(
    sources: Array<Omit<Chunk, 'embedding'> & {document: Omit<Document, 'contents'> | null}>
): Array<Source> {
    return sources.map(source => {
        let url: string | undefined;
        if (source.document?.path?.startsWith('data/docs/next')) {
            const path = source.document.path.replace(`data/docs/next`, ``)
            const urlPath = path.split('/').map(segment => {
                let newSegment: string
                const segmentComponents = segment.split('-')
                if (isNumber(segmentComponents[0])) return segmentComponents.slice(1).join('-')
                else return segment
            }).join('/')
            url = `https://nextjs.org/docs` + urlPath
            url = url.replace('.mdx', '')
        }

        // AI
        else if(source.document?.path) {

            const path = source.document.path.replace(`data/docs/ai`, ``)
            const urlPath = path.split('/').map(segment => {
                const segmentComponents = segment.split('-')
                if (isNumber(segmentComponents[0])) return segmentComponents.slice(1).join('-')
                else return segment
            }).join('/')
            url = `https://sdk.vercel.ai` + urlPath
            url = url.replace('.mdx', '')
        }

        return {
            text: source.originalContent || '',
            title: source.document?.title || '',
            icon: 'https://nextjs.org/favicon.ico',
            link: url || null
        } satisfies Record<string, JSONValue>
    })
}

const isNumber = (s: string): boolean => !Number.isNaN(Number(s))
