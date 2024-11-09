
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

export type Source = {
    text: string | null
    title: string | null
    icon: string | null
    link: string | null
}

export type SourcesMessage = {
    type: 'sources', 
    sources: Array<Source>
}

export type StreamedMessageAnnotationMessage = RewrittenQueryMessage | ExtractedKeywordsMessage | RelatedImagesMessage | SourcesMessage

export type StatusUpdate = {
    type: 'statusUpdate',
    status: 'optimizing' | 'researching' | 'generating' | 'done'
}

export type StreamedDataMessage = StatusUpdate

