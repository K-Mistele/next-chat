import {ipAddress} from '@vercel/functions'
import redis from 'redis'
import logger from '@/lib/logger'
import moment from 'moment'

const WINDOW_SECONDS = 60
const MAX_TOKENS = 5


async function getRedisClient() {
    const redisClient = redis.createClient({
        url: process.env.REDIS_URL
    })
    redisClient.on('error', (err) => logger.error(err))
    await redisClient.connect()
    return redisClient
}

export async function rateLimiterShouldAllowRequest(request: Request): Promise<boolean> {

    if (!process.env.VERCEL) return true
    const redisClient = await getRedisClient()
    const ip = ipAddress(request)
    if (!ip) {
        logger.error(`Unable to get IP Address`)

        return false
    }
    logger.debug(`Checking rate limit for ${ip}`)

    const tokenBucket =  await redisClient.get(ip)
    if (!tokenBucket) {
        logger.debug(`No token bucket found! creating a bucket for ${ip} and allowing request.`)
        const newRecord = JSON.stringify({
            timestamp: Date.now(),
            tokens: MAX_TOKENS - 1
        })
        await redisClient.set(ip, newRecord)
        return true
    } else {
        logger.debug(`Looked up rate limit record for IP ${ip}: `, tokenBucket)

        try {
            const {timestamp, tokens} = JSON.parse(tokenBucket)
            const differenceSeconds = Math.floor(Math.abs(Date.now() - timestamp) / 1000)
            if (differenceSeconds > WINDOW_SECONDS) {
                logger.debug(`Token bucket timed out for ${ip}; creating a new bucket and allowing request`)
                // create new token bucket
                const newRecord = JSON.stringify({
                    timestamp: Date.now(),
                    tokens: MAX_TOKENS - 1
                })
                await redisClient.set(ip, newRecord)
                return true
            } else {
                if (tokens > 0) {
                    logger.debug(`Token bucket for ${ip} has tokens; updating tokens and allowing request`)
                    const newRecord = JSON.stringify({
                        timestamp,
                        tokens: tokens - 1
                    })
                    await redisClient.set(ip, newRecord)
                    return true
                }
                else {
                    logger.debug(`Token bucket for ${ip} does NOT have tokens remaining; denying request`)
                    return false
                }
            }
        }
        catch (err) {
            logger.error(`Error trying to parse bucket ${tokenBucket}:`, err)
            return false
        }
    }
}


