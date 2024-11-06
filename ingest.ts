import {NewDocument, NewImage, NewChunk, chunks, images} from '@/db/schema'
import {extractAndEmbedChunks, extractAndEmbedImages, findMdxFiles, loadDocuments} from './data/chunking-and-extraction'
import logger from '@/lib/logger'
import {updateDatabase} from './data/transactions'

/**
 * Entrypoint
 */
async function main() {

    // Locate MDX Files and get an array of file paths
    logger.debug(`Finding MDX files...`)
    let start = performance.now()
    const filePaths: Array<string> = []
    await findMdxFiles(`./data/docs`, filePaths)
    let end = performance.now()
    logger.info(`Found ${filePaths.length} MDX files in ${Math.floor(end-start)} ms`)

    // read each document, and load the contents.
    logger.debug(`Loading documents...`)
    start = performance.now()
    const documents: Array<NewDocument> = await loadDocuments(filePaths)
    end = performance.now()
    logger.info(`Processed ${documents.length} documents in ${Math.floor(end-start)} ms`)


    // Extract and embed image tags
    logger.debug(`Loading image tags...`)
    start = performance.now()
    const [imageData, chunkData]: [Array<NewImage>, Array<NewChunk>] = await Promise.all([
        extractAndEmbedImages(documents),
        extractAndEmbedChunks(documents)
    ])
    end = performance.now()
    logger.info(`Processed ${documents.length} documents for images in ${Math.floor(end-start)} ms`)

    await updateDatabase(documents, chunkData, imageData)
}


/**
 * Enter it :)
 */
main()
    .then(() => {
        logger.info(`done!`)
        process.exit(0)
    })
    .catch(err => {
        logger.error(err)
        process.exit(1)
    })