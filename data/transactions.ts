import {chunks, documents, images, NewChunk, NewDocument, NewImage} from '@/db/schema'
import {db} from '@/db'
import logger from '@/lib/logger'
import {sql} from 'drizzle-orm'

export async function updateDatabase(
    documentsArr: Array<NewDocument>,
    chunkArr: Array<NewChunk>,
    imageArr: Array<NewImage>
): Promise<any> {

    // create a transaction that erases the chunks and images, and does the update - since chunking strategy may have
    // changed

    const transactionResult = await db.transaction(async (tx) => {

        try {
            logger.debug(`Deleting existing chunks, images, documents`)
            const deleteChunksResult = await tx.delete(chunks).returning()
            const deleteImagesResult = await tx.delete(images).returning()
            const deleteDocumentsResult = await tx.delete(documents).returning()
            logger.info(`Deleting ${deleteDocumentsResult.length} documents, ${deleteChunksResult.length} chunks, and ${deleteImagesResult.length} images`)

            logger.info(`Inserting ${documentsArr.length} documents, ${chunkArr.length} chunks, and ${imageArr.length} images`)
            await tx.insert(documents).values(documentsArr)
            logger.info(`Document insertion completed!`)
            await tx.insert(images).values(imageArr).onConflictDoNothing()
            logger.info(`Image insertion completed!`)
            await tx.insert(chunks).values(chunkArr)
            logger.info(`Chunk insertion completed!`)
            logger.info(`All insertions completed!`)

        }
        catch (err: any) {
            logger.error(`Error inserting new records:`, err)
            tx.rollback()
        }
    })
}