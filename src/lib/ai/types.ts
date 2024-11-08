import {Chunk} from '@/db/schema'

export type RewrittenQueryMessage = {
    type: 'rewrittenQuery',
    query: string
}

export type ExtractedKeywordsMessage = {
    type: 'extractedKeywords',
    keywords: Array<string>
}

export type RelatedImagesMessage = {
    type: 'relatedImages',
    imageData: Array<{
        url: string,
        alt: string
    }>
}

export type SourcesMessage = {
    type: 'sources', 
    chunks: Array<Omit<Chunk, 'embedding'>>
}

export type DataStreamMessage = RewrittenQueryMessage | ExtractedKeywordsMessage | RelatedImagesMessage | SourcesMessage