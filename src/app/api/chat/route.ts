import {type CoreMessage, streamText, StreamData, TextPart, JSONValue} from 'ai'
import {openai} from '@ai-sdk/openai'
import {systemPrompt} from '@/lib/ai/system-prompt'
import logger from '@/lib/logger'
import {rewriteQuery} from '@/lib/ai/agents/query-rewriter'
import {getMessageTextContent} from '@/lib/ai/utils'
import {extractKeywords} from '@/lib/ai/agents/keyword-extractor'
import type {StreamedMessageAnnotationMessage, Source, StreamedDataMessage} from '@/lib/ai/types'
import {Chunk, type Document, Image} from '@/db/schema'
import {findImages} from '@/lib/retrieval/image-retrieval'
import {findChunks} from '@/lib/retrieval/chunk-retrieval'

export async function POST(request: Request) {

    const {messages}: { messages: CoreMessage[] } = await request.json()
    const [lastUserMessage] = messages.filter(message => message.role === "user").slice(-1);
    const userQuery = getMessageTextContent(lastUserMessage)

    const start = performance.now()
    const data = new StreamData()

    // rewrite for RAG purposes
    data.append({type: 'statusUpdate', status: 'optimizing'} satisfies StreamedDataMessage)
    const rewrittenQuery = new Promise<string>((resolve) => {
        rewriteQuery(userQuery)
            .then((rewrittenQuery: string) => {
                if (!rewrittenQuery || !rewrittenQuery.length) throw new Error(`Rewritten query has no length!`)
                data.appendMessageAnnotation({type: 'rewrittenQuery', query: rewrittenQuery} satisfies StreamedMessageAnnotationMessage)
                resolve(rewrittenQuery)
            })
            .catch((err: any) => {
                logger.error(`Error rewriting query: `, err)
                data.appendMessageAnnotation({type: 'rewrittenQuery', query: userQuery} satisfies StreamedMessageAnnotationMessage)
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
                    data.appendMessageAnnotation({type: 'extractedKeywords', keywords} satisfies StreamedMessageAnnotationMessage)
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
                        data.appendMessageAnnotation({type: 'relatedImages', imageData} satisfies StreamedMessageAnnotationMessage)
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
                data.append({type: 'statusUpdate', status: 'researching'} satisfies StreamedDataMessage)
                const intermediate = performance.now()
                findChunks(rewrittenQuery, keywords || [])
                    .then((chunks: Array<Omit<Chunk, 'embedding'> & {document: Omit<Document, 'contents'>|null}>)=> {
                        data.appendMessageAnnotation({
                            type: 'sources',
                            sources: normalizeChunksWithDocumentsToSources(chunks)
                        } satisfies StreamedMessageAnnotationMessage)
                        const end = performance.now()
                        logger.info(`Took ${Math.floor(intermediate-start)} ms from request start to get rewritten query and keywords`)
                        logger.info(`Took ${Math.floor(end - intermediate)} ms from receiving search terms to stream chunks`)
                        logger.info(`Took ${Math.floor(end - start)} ms from request start to stream chunks`)
                        resolve(chunks)
                    })
                    .catch((err: any) => {
                        logger.error(`Failed to retrieve chunks:`, err)
                        data.appendMessageAnnotation({type: 'sources', sources: []} satisfies  StreamedMessageAnnotationMessage)
                        resolve([])
                    })
            })
            .catch((err: any) => {
                logger.error(`Unable to retrieve query and chunks for image retrieval`, err)
                data.appendMessageAnnotation({type: 'sources', sources: []} satisfies  StreamedMessageAnnotationMessage)
            })
    })


    // call data.append({...}) to add data to the stream
    // call data.appendMessageAnnotation to add to a message
    const result = await streamText({
        model: openai('gpt-4o-mini'),
        system: 'You are a helpful assistant',
        messages: [
            {role: `system`, content: systemPrompt},
            ...messages
        ],
        onFinish: () => {
            // TODO do NOT call data.close until promises have settled for image search, chunk search, agents, and follow-up suggestions
            data.append({type: 'statusUpdate', status: 'done'} satisfies StreamedDataMessage)
            data.close()
        }
    })


    logger.debug(`Returning stream...`)
    return result.toDataStreamResponse({data})
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
            url = `https://next.js.org/docs` + urlPath
        }

        // AI
        else if(source.document?.path) {

            const path = source.document.path.replace(`data/docs/ai`, ``)
            const urlPath = path.split('/').map(segment => {
                let newSegment: string
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
