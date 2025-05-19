import { headers } from "next/headers"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import { oneTap } from "better-auth/plugins"
import { admin } from "better-auth/plugins/admin"

import { db } from "@/db"

import { env } from "./env"

const auth = betterAuth({
  dialect: "postgres", // or "mysql", "sqlite"
  secret: env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  socialProviders: {
    google: {
      clientId: env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [nextCookies(), oneTap(), admin()],
})

export type Session = typeof auth.$Infer.Session
export type User = typeof auth.$Infer.Session.user

async function getSession() {
  "use server"
  return await auth.api.getSession({
    headers: await headers(),
  })
}

async function getUser() {
  const session = await getSession()
  return session?.user
}

export { auth, getSession, getUser }
