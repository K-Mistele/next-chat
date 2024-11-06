import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// Disable prefetch as it's not supported for "Transaction" mode which we're using for Next.js
const client = postgres(process.env.DATABASE_URL!, {prepare: false})
export const db = drizzle({client})