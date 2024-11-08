import {db} from '@/db'
import {sql, getTableColumns, SQL} from 'drizzle-orm'
import {images, chunks, Chunk, Image} from '@/db/schema'
import logger from '@/lib/logger'

/**
 * Properties for Full-text ranking
 * @property tsRank - float representing the frequency of search terms in the document
 * @property tsRankCd - float representing proximimity of query terms in the document
 */
export interface RankedFullTextSearchResult {
    tsRank: number
    tsRankCd: number
}

/**
 * Find exact matches for a given word
 * @param keyWordsAndPhrases
 * @param table
 * @param column
 * @param limit
 */
export async function findExactMatches(keyWordsAndPhrases: Array<string>, table: typeof images, column: typeof images.alt, limit: number): Promise<Array<Omit<Image, 'embedding'>>>;
export async function findExactMatches(keyWordsAndPhrases: Array<string>, table: typeof chunks, column: typeof chunks.originalContent, limit: number): Promise<Array<Omit<Chunk, 'embedding'>>>;
export async function findExactMatches(keyWordsAndPhrases: Array<string>, table: typeof chunks, column: typeof chunks.contextualContent, limit: number): Promise<Array<Omit<Chunk, 'embedding'>>>;
export async function findExactMatches(
    keyWordsAndPhrases: Array<string>,
    table: typeof images | typeof chunks,
    column: typeof images.alt | typeof chunks.originalContent | typeof chunks.contextualContent,
    limit: number=50
): Promise<Array<Omit<Image, 'embedding'>> | Array<Omit<Chunk, 'embedding'>>> {

    logger.verbose(`building query for keyword search for`, keyWordsAndPhrases)
    // Separate into single-word keywords and multi-word "keyphrases"
    const keyPhrases = keyWordsAndPhrases.filter(keyPhrase => keyPhrase.includes(' '))
    const keyWords = keyWordsAndPhrases.filter(keyPhrase => !keyPhrase.includes(' '))

    const target = sql`to_tsvector('english', ${column})`
    let search: SQL

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

    const whereClause: SQL = sql.join([target, search], sql.raw(` @@ `))

    const {embedding, ...columns} = getTableColumns(table)
    const query = db.select(columns)
        .from(table)
        .where(whereClause)
        .limit(limit)
    logger.debug(`results:`, await query)
    return query
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
