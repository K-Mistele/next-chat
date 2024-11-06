import {RecursiveCharacterTextSplitter} from 'langchain/text_splitter'
import fs from 'node:fs/promises'
import path from 'node:path'
import type { NewDocument, NewImage, NewChunk} from '@/db/schema'
import {embedChunks, embedImages} from './embedding'
import {contextualizeChunks} from './contextualize'
import logger from '@/lib/logger'

/**
 * Recursively find mdx files in a specified directlry
 * @param dir
 * @param filePaths
 */
export async function findMdxFiles(dir: string, filePaths: Array<string>) {
    const files = await fs.readdir(dir, {withFileTypes: true})

    const filePromises = []
    for (const file of files) {
        const filePath = path.join(dir, file.name)
        if (file.isDirectory()) {
            logger.debug(`Found directory:`, filePath)
            filePromises.push(findMdxFiles(filePath, filePaths))
        }
        else if (file.isFile() && path.extname(file.name) === '.mdx') {
            logger.info(`Found file: `, filePath)
            logger.debug(`length:`, filePaths.push(filePath))
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
            }
            else if (line.startsWith('description:')) {
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
export async function loadDocuments(paths: Array<string>): Promise<Array<NewDocument>> {

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
        const attributes = {srcDark: null, alt: null};

        let attrMatch;
        while ((attrMatch = attributesRegex.exec(attributesString)) !== null) {
            const attributeName = attrMatch[1]; // "src" or "alt"
            const attributeValue = attrMatch[2]; // value corresponding to the attribute
            // @ts-expect-error - it works
            attributes[attributeName] = attributeValue; // Store the value in the correct property
        }
        if (attributes.srcDark && attributes.alt) {
            images.push({
                url: `https://nextjs.org` + attributes.srcDark,
                alt: attributes.alt,
            })
        }
    }


    return images;
}

/**
 * Extract images from documents and embed them; using caching with redis
 * @param documents
 */
export async function extractAndEmbedImages(documents: Array<NewDocument>): Promise<Array<NewImage>> {

    // Build a map of the document path to the array of images in it
    const imageTagData: Array<{alt: string, url: string, path: string}> = []
    for (const document of documents) {
        const imageTagsForDocument = extractImageTags(document)
            .map(data => ({path: document.path, ...data}))
        imageTagData.push(...imageTagsForDocument)
    }

    return await embedImages(imageTagData)

}

export async function extractAndEmbedChunks(documents: Array<NewDocument>): Promise<Array<NewChunk>> {

    // Ideal embeddings CTX size is 512, and we need about 100 tokens for the semantic summary
    const markdownSplitter = RecursiveCharacterTextSplitter.fromLanguage('markdown', {
        chunkSize: 1000, // cohere: 1000 characters -> 200-300 tokens
        chunkOverlap: 0, // no need since we are doing contextual retrieval
    })

    const documentPromises = documents.map(async (doc) => {
        const docs = await markdownSplitter.createDocuments([doc.contents || ''])
        const chunks = docs.map(doc => ({
            pageContent: doc.pageContent,
            metadata: {
                loc: {
                    lines: {
                        from: doc.metadata.loc.lines.from,
                        to: doc.metadata.loc.lines.to
                    }
                }
            }
        }))
        return {
            ...doc,
            chunks
        }
    })

    const documentsWithChunks = await Promise.all(documentPromises)
    const contextualizedDocumentsWithChunks = await contextualizeChunks(documentsWithChunks)

    logger.info(`Finished contextualizing documents!`)

    return await embedChunks(contextualizedDocumentsWithChunks)

}