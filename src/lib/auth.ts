import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import { oneTap } from "better-auth/plugins"
import { admin } from "better-auth/plugins/admin"

import { db } from "@/db"

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "sqlite"
  }),
  plugins: [nextCookies(), oneTap(), admin()],
})

export type Session = typeof auth.$Infer.Session

export { auth }
