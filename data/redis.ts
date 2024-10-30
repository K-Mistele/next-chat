import Redis from 'redis'
import 'dotenv/config'
import {createHash} from 'node:crypto'

const host = process.env.REDIS_HOST || 'localhost'
const port = Number(process.env.REDIS_PORT || 6379)
const databaseNumber = process.env.NODE_ENV === 'production' ? 0 : 1

const client = Redis.createClient({
    url: `redis://${host}:${port}/${databaseNumber}`,
    pingInterval: 2000,
}).connect()


/**
 * Load image embedding from the cache if available
 * @param url
 */
export async function loadCachedImgEmbedding(url: string) {

    const redis = await client
    const key: string = `img:${url}`

    const result = await redis.GET(key)
    if (result) return JSON.parse(result) as Array<number>
    else return null
}

/**
 * Store an image's embedding to the cache
 * @param url
 * @param embedding
 */
export async function cacheImgEmbedding(url: string, embedding: Array<number>) {

    const redis = await client
    const key: string = `img:${url}`
    const result = await redis.SET(key, JSON.stringify(embedding))
    return
}

/**
 * Load a cached embedding for a chunk IFF the content is the same
 * @param chunkId
 * @param chunkContent
 */
export async function loadCachedChunkEmbedding(
    chunkId: string,
    chunkContent: string,
): Promise<Array<number> | null> {

    const redis = await client
    const key: string = `chunk:${chunkId}`
    const result = await redis.HGETALL(key)

    if ((!result.hash) || result.hash != sha256Hash(chunkContent)) {
        redis.HDEL(key, 'embedding') // invalidate cached embedding since hash is missing
        return null
    }
    if (!result.embedding) {
        return null
    }

    return JSON.parse(result.embedding) as Array<number>
}

/**
 * Store a chunk's embedding including a content hash
 * @param chunkId
 * @param chunkContent
 * @param embedding
 */
export async function storeChunkEmbedding(
    chunkId: string,
    chunkContent: string,
    embedding: Array<number>
) {

    const hash = sha256Hash(chunkContent)
    const key: string = `chunk:${chunkId}`
    const redis = await client

    await Promise.all([
        redis.HSET(key, 'hash', hash),
        redis.HSET(key, 'embedding', JSON.stringify(embedding))
    ])
}

function sha256Hash(content: string): string {
    return createHash('sha256').update(content).digest('hex')
}

/**
 * Store the contextualized version of a chunk
 * @param chunkId
 * @param contextualizedChunk
 */
export async function cacheContextualizedChunk(
    chunkId: string,
    contextualizedChunk: string
) {
    const redis = await client
    const key: string = `chunk:${chunkId}`

    const result = await redis.HSET(key, 'contextualizedChunk', contextualizedChunk)
    if (!result) console.error(`FAILED to cache chunk ${chunkId} contextualization: ${contextualizedChunk}`)
}

/**
 * Load the contextualized version of a chunk from redis
 * @param chunkId
 */
export async function loadCachedContextualizedChunk(
    chunkId: string,
) {
    const redis = await client
    const key: string = `chunk:${chunkId}`

    const value = await redis.HGET(key, 'contextualizedChunk')
    return value || null
}