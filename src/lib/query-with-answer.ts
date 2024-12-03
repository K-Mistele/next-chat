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
    sources?: Array<Source> | undefined | null
}

export class QueryWithAnswer {
    public query: string
    public answer: QueryAnswer

    constructor(query: string) {
        this.query = query
        this.answer = {}
    }
}