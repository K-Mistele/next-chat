import logger from '@/lib/logger'
import {generateObject} from 'ai'
import {model} from '@/lib/ai/agents/config'
import {z} from 'zod'

export async function extractKeywords(query: string): Promise<Array<string>> {
    logger.info(`Extracting keywords from query: "${query}"`)
    const result = await generateObject({
        model,
        prompt: prompt(query),
        temperature: 0.7,
        schema: z.object({
            keywords: z.array(z.string())
        })
    })

    const keywords = result.object.keywords
    logger.info(`query keywords:`, keywords)
    return keywords
}

const prompt = (query: string): string => `
You are a specialized keyword extraction agent. Your task is to analyze the given query about the Next.js framework
and extract the most relevant, high-impact keywords from the search to be used in a full-text keyword search of a
database for RAG purposes. Extract ONLY keywords that are either present in the query or directly relevant to it. 
Include no more than 4 keywords.


Guidelines:
- Extract high-relevance keywords: Identify terms that directly relate to the core themes of the text.
- Avoid unnecessary words: Focus on nouns, verbs, or adjectives that convey meaning and significance in the context of the content. 
- Extract acronyms: Make sure to include acronyms in your keywords since they are often relevant to Next.js
- Avoid words that would be obvuous in a Next.js context, since the database that the keyword search will be performed against is Next.js's Documentation.
Avoid terms like "Next.js", "web framework", "JavaScript" and "react".
- Extract no more than 4 keywords; ensure that the 4 you do extract are the most relevant to the query.

Respond in the following JSON format: {"keywords": [...]}

The user's query is provided between <query></query> tags:
<query>${query}</query>
`