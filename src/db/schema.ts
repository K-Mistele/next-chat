import {randomUUID} from 'node:crypto'
import {
    pgTable,
    vector,
    text,
    uuid,
    integer,
    index
} from 'drizzle-orm/pg-core'

// Store the WHOLE documents - they are small, so should not be a big deal
export const documents = pgTable('documents', {
    id: uuid('id').primaryKey().$defaultFn(() => randomUUID()),
    name: text('name').unique().notNull(),
    contents: text('contents'),
});


export const chunks = pgTable('chunks', {
        id: text('id').primaryKey(),
        embedding: vector('embedding', {dimensions: 1024}).notNull(),
        originalContent: text('original_content'),
        contextualContent: text('contextual_content'),
        documentId: uuid('document_id').notNull().references(() => documents.id, {onDelete: 'cascade'}),
        chunkIndex: integer('chunk_index').notNull(),
    },
    (table) => ({
        embeddingIndex: index('chunks_embedding_index').using('hnsw', table.embedding.op('vector_cosine_ops'))
    })
)

// Images for referencing items in storage
export const images = pgTable('images', {
        url: text('url').primaryKey(),
        alt: text('alt_text'),
        embedding: vector('embedding', {dimensions: 1024}).notNull(),
        documentId: uuid('document_id').notNull().references(() => documents.id, {onDelete: 'cascade'}),
        chunkId: text('chunk_id').references(() => chunks.id, {onDelete: 'cascade'}),
    },
    (table) => ({
        embeddingIndex: index('images_embedding_index').using('hnsw', table.embedding.op('vector_cosine_ops'))
    })
)