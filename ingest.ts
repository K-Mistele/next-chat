import type {NewDocument, NewImage, NewChunk } from '@/db/schema'
import {extractAndEmbedChunks, extractAndEmbedImages, findMdxFiles, loadDocuments} from './data/chunking-and-extraction'


/**
 * Entrypoint
 */
async function main() {

    // Locate MDX Files and get an array of file paths
    console.log(`Finding MDX files...`)
    let start = performance.now()
    const filePaths: Array<string> = []
    await findMdxFiles(`./data/docs`, filePaths)
    let end = performance.now()
    console.log(`Found ${filePaths.length} MDX files in ${Math.floor(end-start)} ms`)

    // read each document, and load the contents.
    console.log(`Loading documents...`)
    start = performance.now()
    const documents: Array<NewDocument> = await loadDocuments(filePaths)
    end = performance.now()
    console.log(`Processed ${documents.length} documents in ${Math.floor(end-start)} ms`)


    // Extract and embed image tags
    console.log(`Loading image tags...`)
    start = performance.now()
    const [imageData, chunkData]: [Array<NewImage>, Array<NewChunk>] = await Promise.all([
        extractAndEmbedImages(documents),
        extractAndEmbedChunks(documents)
    ])
    end = performance.now()
    console.log(`Processed ${documents.length} documents for images in ${Math.floor(end-start)} ms`)
}


/**
 * Enter it :)
 */
main()
    .then(() => {
        console.log(`done!`)
        process.exit(0)
    })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })