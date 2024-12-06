import {Source} from '@/lib/ai/types'

export interface ImageInfo {
    url: string,
    alt: string
}

export interface QueryAnswer {
    content?: string
    status?: string
    rewritten?: string
    images?: Array<ImageInfo>
    sources?: Array<Source>
    keywords?: Array<string>
}

export interface QueryWithAnswer extends QueryAnswer {
    query: string
}