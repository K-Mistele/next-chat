import {z} from 'zod'
import logger from '@/lib/logger'
import {defaultAgentModel} from '@/lib/ai/agents/config'
import {generateObject} from 'ai'

export async function suggestRelatedQueries(query: string): Promise<Array<string>> {

    logger.debug(`Suggesting related queries for query "${query}"`)
    const result = await generateObject({
        model: defaultAgentModel,
        prompt: prompt(query),
        temperature: 0.7,
        schema: z.object({
            suggestions: z.array(z.string())
        })
    })

    const relatedQueries = result.object.suggestions
    logger.info(`Suggested follow-up queries:`, relatedQueries)
    return relatedQueries
}

// TODO this needs more work and it is not done.
const prompt = (query: string): string => `
You are a professional web researcher, and your task is to generate a set of 3 queries that explore the subject matter more deeply.
Build upon the initial query and the information uncovered in the search results.

`