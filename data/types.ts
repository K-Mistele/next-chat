import type {NewDocument} from '@/db/schema'

export interface LangchainChunk {
    pageContent: string
    metadata: {
        loc: {
            lines: {
                to: number
                from: number
            }
        }
    }
}

export interface DocumentWithChunks extends NewDocument {
    chunks: Array<LangchainChunk>
}

export interface ContextualizedChunk extends LangchainChunk {
    contextualizedContent: string
    id: string
}

export interface DocumentWithContextualizedChunks extends DocumentWithChunks {
    chunks: Array<ContextualizedChunk>
}