import {db} from '@/db'
import {sql, getTableColumns, SQL, desc} from 'drizzle-orm'
import {images, chunks, Chunk, Image} from '@/db/schema'
import logger from '@/lib/logger'
import {performance} from 'node:perf_hooks'

/**
 * Properties for Full-text ranking
 * @property frequencyRank - float representing the frequency of search terms in the document
 * @property proximityRank - float representing proximimity of query terms in the document
 */
export interface RankedFullTextSearchResult {
    frequencyRank: number
    proximityRank: number
}

/**
 * Find exact matches for a given word
 * @param keyWordsAndPhrases
 * @param table
 * @param column
 * @param limit
 */
export async function findExactMatches(keyWordsAndPhrases: Array<string>, table: typeof images, column: typeof images.alt, limit: number): Promise<Array<Omit<Image & RankedFullTextSearchResult, 'embedding'>>>;
export async function findExactMatches(keyWordsAndPhrases: Array<string>, table: typeof chunks, column: typeof chunks.originalContent, limit: number): Promise<Array<Omit<Chunk & RankedFullTextSearchResult, 'embedding'>>>;
export async function findExactMatches(keyWordsAndPhrases: Array<string>, table: typeof chunks, column: typeof chunks.contextualContent, limit: number): Promise<Array<Omit<Chunk & RankedFullTextSearchResult, 'embedding'>>>;
export async function findExactMatches(
    keyWordsAndPhrases: Array<string>,
    table: typeof images | typeof chunks,
    column: typeof images.alt | typeof chunks.originalContent | typeof chunks.contextualContent,
    limit: number = 50
): Promise<Array<Omit<Image & RankedFullTextSearchResult, 'embedding'>> | Array<Omit<Chunk & RankedFullTextSearchResult, 'embedding'>>> {

    // Separate into single-word keywords and multi-word "keyphrases"
    const keyPhrases = keyWordsAndPhrases.filter(keyPhrase => keyPhrase.includes(' '))
    const keyWords = keyWordsAndPhrases.filter(keyPhrase => !keyPhrase.includes(' '))

    const target = sql`to_tsvector('english', ${column})`
    let search: SQL

    // Tricky to handle adding arbitrary unions of tsquery vectors to gether
    if (keyPhrases.length && keyWords.length) {
        logger.debug(`processing keywords and keyphrases`)
        const chunks: SQL[] = [
            sql`to_tsquery('english', ${keyWords.join(' | ')})`,
            ...keyPhrases.map(phrase => sql`phraseto_tsquery('english', ${phrase})`)
        ]
        const sub = sql.join(chunks, sql.raw(` || `)) // join the queries
        search = sql.join([
            sql.raw(`(`),
            sub,
            sql.raw(`)`)
        ])
    }
    else if (keyWords.length) {
        search = sql`to_tsquery('english', ${keyWords.join(' | ')})`
    }
    else {
        const sub = sql.join(
            keyPhrases.map(phrase => sql`phraseto_tsquery('english', ${phrase})`),
            sql.raw(` || `)
        )
        search = sql.join([
            sql.raw(`(`),
            sub,
            sql.raw(`)`)
        ])

    }

    // Assemble where clause
    const whereClause: SQL = sql.join([target, search], sql.raw(` @@ `))
    // Assemble rank clause based on frequency of terms in document
    const frequencyRankClause: SQL = sql.join([
        sql.raw(`ts_rank(`),
        sql`to_tsvector('english', ${column})`,
        sql.raw(`, `),
        search,
        sql.raw(`)`)
    ])
    // Assemble rank clause based on proximity of terms in document
    const proximityRankClause: SQL = sql.join([
        sql.raw(`ts_rank_cd(`),
        sql`to_tsvector('english', ${column})`,
        sql.raw(`, `),
        search,
        sql.raw(`)`)
    ])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {embedding, ...columns} = getTableColumns(table) // This line removes the "embedding" property since it's big
    const start = performance.now()
    const query = db
        .select({
            ...columns,
            frequencyRank: frequencyRankClause.as('frequency_rank'),
            proximityRank: proximityRankClause.as('proximity_rank')
        })
        .from(table)
        .where(whereClause)
        .orderBy(t => desc(t.frequencyRank))
        .limit(limit)
    const result = await query
    const end = performance.now()
    logger.debug(`Full-text search finished in ${Math.floor(end-start)} ms`)
    logger.silly(`query: `, query.toSQL())
    logger.silly(`full-text search results:`, result)

    return result as Array<Omit<Image & RankedFullTextSearchResult, 'embedding'>> | Array<Omit<Chunk & RankedFullTextSearchResult, 'embedding'>>
}


/**
 * Map an array of phrases into an array of words
 * @param phrases
 */
function flattenPhrasesToWords(phrases: Array<string>): Array<string> {

    return phrases.reduce((
        words: Array<string>,
        phrase: string
    ) => {
        if (phrase.includes(' ')) words.push(...phrase.split(' '))
        else words.push(phrase)
        return words
    }, [] satisfies Array<string>)
}
