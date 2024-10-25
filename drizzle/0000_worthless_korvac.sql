CREATE TABLE IF NOT EXISTS "chunks" (
	"id" text PRIMARY KEY NOT NULL,
	"embedding" vector(1024) NOT NULL,
	"original_content" text,
	"contextual_content" text,
	"document_id" uuid NOT NULL,
	"chunk_index" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "documents" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"path" text NOT NULL,
	"contents" text,
	"tags" text[],
	CONSTRAINT "documents_path_unique" UNIQUE("path")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "images" (
	"url" text PRIMARY KEY NOT NULL,
	"alt_text" text,
	"embedding" vector(1024) NOT NULL,
	"document_id" uuid NOT NULL,
	"chunk_id" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chunks" ADD CONSTRAINT "chunks_document_id_documents_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images" ADD CONSTRAINT "images_document_id_documents_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images" ADD CONSTRAINT "images_chunk_id_chunks_id_fk" FOREIGN KEY ("chunk_id") REFERENCES "public"."chunks"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "chunks_embedding_index" ON "chunks" USING hnsw ("embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "images_embedding_index" ON "images" USING hnsw ("embedding" vector_cosine_ops);