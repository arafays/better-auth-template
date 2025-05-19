import { neon } from "@neondatabase/serverless"

// import  { drizzle as drizzleWs, neonConfig, Pool} from "@neondatabase/serverless"
// import ws from "ws"

import { drizzle as drizzleHttp } from "drizzle-orm/neon-http"

import { env } from "@/lib/env"

import * as schema from "./schema"

const connectionString = env.DATABASE_URL

const sql = neon(connectionString)
// const pool = new Pool({ connectionString })
// Drizzle supports both HTTP and WebSocket clients. Choose the one that fits your needs:
// HTTP Client:
// - Best for serverless functions and Lambda environments
// - Ideal for stateless operations and quick queries
// - Lower overhead for single queries
// - Better for applications with sporadic database access
export const db = drizzleHttp({
  client: sql,
  schema,
  logger: env.NODE_ENV === "development" ? true : false,
})

// WebSocket Client:
// - Best for long-running applications (like servers)
// - Maintains a persistent connection
// - More efficient for multiple sequential queries
// - Better for high-frequency database operations
//
// neonConfig.webSocketConstructor = ws
// export const dbWs = drizzleWs({ client: pool })
