import {randomUUID} from 'node:crypto'
import {
    pgTable,
    vector,
    text,
    uuid,
    integer,
    index
} from 'drizzle-orm/pg-core'
import {sql} from 'drizzle-orm'

// Store the WHOLE documents - they are small, so should not be a big deal
export const documents = pgTable('documents', {
    title: text('name'),
    description: text('description'),
    path: text('path').primaryKey(),
    contents: text('contents'),
    tags: text('tags').array(),
});


export const chunks = pgTable('chunks', {
        id: text('id').primaryKey(),
        embedding: vector('embedding', {dimensions: 1024}).notNull(),
        originalContent: text('original_content'),
        contextualContent: text('contextual_content'),
        documentId: text('document_path').notNull().references(() => documents.path, {onDelete: 'cascade'}),
        chunkIndex: integer('chunk_index').notNull(),
    },
    (table) => ({
        embeddingIndex: index('chunks_embedding_index').using('hnsw', table.embedding.op('vector_cosine_ops')),
        tsVectorIndex: index('chunks_tsvector_index').using('gin', sql`to_tsvector('english', ${table.contextualContent})`)
    })
)

// Images for referencing items in storage
export const images = pgTable('images', {
        url: text('url').primaryKey(),
        alt: text('alt_text'),
        embedding: vector('embedding', {dimensions: 1024}).notNull(),
        documentPath: text('document_path').notNull().references(() => documents.path, {onDelete: 'cascade'}),
    },
    (table) => ({
        embeddingIndex: index('images_embedding_index').using('hnsw', table.embedding.op('vector_cosine_ops')),
        tsVectorIndex: index('images_tsvector_index').using('gin', sql`to_tsvector('english', ${table.alt})`)
    })
)

export type Image = typeof images.$inferSelect
export type NewImage = typeof images.$inferInsert

export type Chunk = typeof chunks.$inferSelect
export type NewChunk = typeof chunks.$inferInsert

export type Document = typeof documents.$inferSelect
export type NewDocument = typeof documents.$inferInsert