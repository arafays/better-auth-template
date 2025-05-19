import { defineConfig } from "drizzle-kit"

import { env } from "@/lib/env"

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  tablesFilter: [env.DATABASE_TABLE_FILTER],
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
