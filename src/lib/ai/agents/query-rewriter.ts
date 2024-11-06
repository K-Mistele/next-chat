import {generateObject} from 'ai'
import {model} from './config'
import {z} from 'zod'
import logger from '@/lib/logger'

export async function rewriteQuery(query: string): Promise<string> {

    logger.info(`Rewriting query: "${query}"`)
    const result = await generateObject({
        model,
        prompt: prompt(query),
        temperature: 0.7,
        schema: z.object({
            query: z.string()
        })
    })

    const rewritten = result.object.query
    logger.info(`Rewritten query: "${rewritten}"`)
    return rewritten
}

const prompt=  (query: string): string =>  `
You are a highly skilled query rewriter agent designed to optimize search queries for better search engine performance. 
The searches are technical, related to the Next.js web framework
Your task is to take a user's original search or question and rewrite it into a more effective, search-optimized version. This means transforming the query into one that uses keywords and phrases that are commonly searched and align with user intent.

Guidelines:
1. Keep the meaning intact: Ensure the rewritten query maintains the original question or search intent.
2. Use common search terms: Incorporate relevant, high-traffic keywords or phrases for better discoverability.
3. Be concise: Make the query direct and to the point, using language that is easy to understand.
4. Optimize for clarity: Remove unnecessary words or details that are not relevant to the search.
5. Incorporate variations: Where appropriate, include alternative phrasing or commonly used synonyms.
6. Preserve acronyms: Since we queries pertain to the Next.js web framework, we should make sure to preserve acronyms, function names or other specific terminology that may be important.

Respond in the following JSON format:
{"query": "rewritten query goes here"}

The user's original query is provided here in <query></query> XML tags:
<query>${query}</query>
`