import { sqliteTableCreator } from "drizzle-orm/sqlite-core"

import { env } from "@/lib/env"

import * as betterAuthSchema from "./better-auth-schema"

const sqliteTable = sqliteTableCreator(
  (name) => `${env.DATABASE_TABLE_FILTER}_${name}`
)

export { sqliteTable, betterAuthSchema }
