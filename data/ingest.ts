import {RecursiveCharacterTextSplitter} from 'langchain/text_splitter'
import fs from 'node:fs/promises'
import path from 'node:path'
import {
    documents,
    chunks,
    images,
    type NewDocument,
    type NewImage,
    type NewChunk
} from '../src/db/schema'

/**
 * Recursively find mdx files in a specified directlry
 * @param dir
 * @param filePaths
 */
async function findMdxFiles(dir: string, filePaths: Array<string>) {
    const files = await fs.readdir(dir, {withFileTypes: true})

    const filePromises = []
    for (const file of files) {
        const filePath = path.join(dir, file.name)
        if (file.isDirectory()) {
            console.log(`Found directory:`, filePath)
            filePromises.push(findMdxFiles(filePath, filePaths))
        }
        else if (file.isFile() && path.extname(file.name) === '.mdx') {
            console.log(`Found file: `, filePath)
            console.log(`length:`, filePaths.push(filePath))
        }
    }

    await Promise.all(filePromises)
    return filePaths

}

/**
 * Extract frontmatter title and content from a MDX text
 * @param mdxContent
 */
function extractMDXMetadata(mdxContent: string) {
    const metadata: {
        title: string | null,
        description: string | null
    } = {
        title: null,
        description: null
    }

    // Regular expression to extract title and description from front matter
    const frontMatterRegex = /^---\s*([\s\S]*?)---/m;
    const match = frontMatterRegex.exec(mdxContent);

    if (match && match[1]) {
        // Extract individual lines from the front matter
        const lines = match[1].trim().split('\n');

        lines.forEach(line => {
            // Remove any leading or trailing whitespace
            line = line.trim();

            // Check if the line contains a title or description
            if (line.startsWith('title:')) {
                metadata.title = line.replace(/^title:\s*/, '').trim() || null; // set to null if empty
            } else if (line.startsWith('description:')) {
                metadata.description = line.replace(/^description:\s*/, '').trim() || null; // set to null if empty
            }
        });
    }

    return metadata;
}

/**
 * Given the path to a document, extract the path to the document, its' contents, and the title/description from the
 *  frontmatter if they are present in the first place
 * @param path
 */
async function loadDocument(path: string): Promise<NewDocument> {

    const file = await fs.readFile(path)
    const contents = file.toString('utf8')

    // LOCATE HEADER to extract contents
    return {
        path,
        contents,
        ...extractMDXMetadata(contents),
    } satisfies NewDocument
}

/**
 * Asynchronously load all documents
 * @param paths
 */
async function loadDocuments(paths: Array<string>): Promise<Array<NewDocument>> {

    const documentPromises: Array<Promise<NewDocument>> = []
    for (const path of paths) {
        documentPromises.push(loadDocument(path))
    }

    return await Promise.all(documentPromises)
}

interface ImageData {
    url: string
    alt: string
}
const imageTagRegex = /<Image\s*([^>]*?)\/>/g;
const altTextRegex = /alt=["']?([^"']+)["']?/;


/**
 * Extract the image tags from a document
 * @param document - the document
 */
function extractImageTags(document: NewDocument): Array<ImageData> {
    const images: Array<ImageData> = [];
    const imageTagRegex = /<Image\s*([^>]*?)\/>/g;
    const attributesRegex = /\b(srcDark|alt)=["']?([^"']+)["']?/g;

    if (!document.contents) return []

    let match;
    while ((match = imageTagRegex.exec(document.contents!)) !== null) {
        const attributesString = match[1];
        const attributes = { srcDark: null, alt: null };

        let attrMatch;
        while ((attrMatch = attributesRegex.exec(attributesString)) !== null) {
            const attributeName = attrMatch[1]; // "src" or "alt"
            const attributeValue = attrMatch[2]; // value corresponding to the attribute
            // @ts-expect-error - it works
            attributes[attributeName] = attributeValue; // Store the value in the correct property
        }
        if (attributes.srcDark && attributes.alt) {
            images.push({
                url: attributes.srcDark,
                alt: attributes.alt,
            })
        }
    }


    return images;
}

/**
 * Extract images from documents and embed them
 * @param documents
 */
async function extractAndEmbedImages(documents: Array<NewDocument>): Promise<Array<NewImage>> {

    const newImages: Array<NewImage> = []

    // Build a map of the document path to the array of images in it
    const imageTagsForDocuments: Record<string, Array<ImageData>> = {}
    for (const document of documents) {
        imageTagsForDocuments[document.path] = extractImageTags(document)
    }

    // TODO update the full URL. embed the alt text NOT the image since the images will not embed well, and we have
    //  high-quality alt text thanks to vercel


    return newImages
}

async function extractAndEmbedChunks(documents: Array<Document>): Promise<Array<NewChunk>> {

    const newChunks: Array<NewChunk> = []

    return newChunks
}

// NOTE that our vector has a context size of like 512, and we will add like 100 tokens too
const markdownSplitter = RecursiveCharacterTextSplitter.fromLanguage('markdown', {
    chunkSize: 350,
    chunkOverlap: 0, // no need since we are doing contextual retrieval
})

/**
 * Entrypoint
 */
async function main() {

    // Locate MDX Files and get an array of file paths
    console.log(`Finding MDX files...`)
    let start = performance.now()
    const filePaths: Array<string> = []
    await findMdxFiles(`./docs`, filePaths)
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
    const imageData = await extractAndEmbedImages(documents)
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