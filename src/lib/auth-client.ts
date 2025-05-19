import {
  adminClient,
  inferAdditionalFields,
  oneTapClient,
} from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

import { auth } from "@/lib/auth"
import { env } from "@/lib/env"

const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
  plugins: [
    inferAdditionalFields<typeof auth>(),
    oneTapClient({
      clientId: env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    }),
    adminClient(),
  ],
})

export type Session = typeof authClient.$Infer.Session

export { authClient }
