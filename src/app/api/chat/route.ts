import {type CoreMessage, streamText, StreamData, TextPart} from 'ai'
import {openai} from '@ai-sdk/openai'
import {systemPrompt} from '@/lib/ai/system-prompt'
import logger from '@/lib/logger'
import {rewriteQuery} from '@/lib/ai/agents/query-rewriter'
import {getMessageTextContent} from '@/lib/ai/utils'
import {extractKeywords} from '@/lib/ai/agents/keyword-extractor'
import type {DataStreamMessage} from '@/lib/ai/types'
import {Chunk, Image} from '@/db/schema'
import {findImages} from '@/lib/retrieval/image-retrieval'
import {findChunks} from '@/lib/retrieval/chunk-retrieval'

export async function POST(request: Request) {

    const {messages}: { messages: CoreMessage[] } = await request.json()
    const [lastUserMessage] = messages.filter(message => message.role === "user").slice(-1);
    const userQuery = getMessageTextContent(lastUserMessage)

    const data = new StreamData()

    // rewrite for RAG purposes
    const rewrittenQuery = new Promise<string>((resolve) => {
        rewriteQuery(userQuery)
            .then((rewrittenQuery: string) => {
                if (!rewrittenQuery || !rewrittenQuery.length) throw new Error(`Rewritten query has no length!`)
                data.appendMessageAnnotation({type: 'rewrittenQuery', query: rewrittenQuery} satisfies DataStreamMessage)
                resolve(rewrittenQuery)
            })
            .catch((err: any) => {
                logger.error(`Error rewriting query: `, err)
                data.appendMessageAnnotation({type: 'rewrittenQuery', query: userQuery} satisfies DataStreamMessage)
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
                    data.appendMessageAnnotation({type: 'extractedKeywords', keywords} satisfies DataStreamMessage)
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
    const images = new Promise<Array<Omit<Image, 'embedding'>>>((resolve) => {
        Promise.all([rewrittenQuery, keywords])
            .then(([query, keywords]: [string, Array<string> | null]) => {
                findImages(query, keywords || [])
                    .then(images => {
                        const imageData = images.map(img => ({
                            url: img.url,
                            alt: img.alt || ''
                        }))
                        data.appendMessageAnnotation({type: 'relatedImages', imageData} satisfies DataStreamMessage)
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

    const chunks = new Promise<Array<Omit<Chunk, 'embedding'>>>((resolve) => {
        Promise.all([rewrittenQuery, keywords])
            .then(([rewrittenQuery, keywords]: [string, Array<string> | null]) => {
                findChunks(rewrittenQuery, keywords || [])
                    .then((chunks: Array<Omit<Chunk, 'embedding'>>)=> {
                        data.appendMessageAnnotation({type: 'sources', chunks} satisfies DataStreamMessage)
                        resolve(chunks)
                    })
                    .catch((err: any) => {
                        logger.error(`Failed to retrieve chunks:`, err)
                        data.appendMessageAnnotation({type: 'sources', chunks: []} satisfies  DataStreamMessage)
                        resolve([])
                    })
            })
            .catch((err: any) => {
                logger.error(`Unable to retrieve query and chunks for image retrieval`, err)
                data.appendMessageAnnotation({type: 'sources', chunks: []} satisfies  DataStreamMessage)
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
            data.close()
        }
    })

    // TODO do NOT call data.close until promises have settled for image search, chunk search, agents, and follow-up suggestions

    logger.debug(`Returning stream...`)
    return result.toDataStreamResponse({data})
}