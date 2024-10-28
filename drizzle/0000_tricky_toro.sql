CREATE TABLE IF NOT EXISTS "chunks" (
	"id" text PRIMARY KEY NOT NULL,
	"embedding" vector(1024) NOT NULL,
	"original_content" text,
	"contextual_content" text,
	"document_path" text NOT NULL,
	"chunk_index" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "documents" (
	"name" text,
	"description" text,
	"path" text PRIMARY KEY NOT NULL,
	"contents" text,
	"tags" text[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "images" (
	"url" text PRIMARY KEY NOT NULL,
	"alt_text" text,
	"embedding" vector(1024) NOT NULL,
	"document_path" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chunks" ADD CONSTRAINT "chunks_document_path_documents_path_fk" FOREIGN KEY ("document_path") REFERENCES "public"."documents"("path") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "images" ADD CONSTRAINT "images_document_path_documents_path_fk" FOREIGN KEY ("document_path") REFERENCES "public"."documents"("path") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "chunks_embedding_index" ON "chunks" USING hnsw ("embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "images_embedding_index" ON "images" USING hnsw ("embedding" vector_cosine_ops);