import { WebApplication, WithContext } from "schema-dts"

export const siteConfig: WithContext<WebApplication> = {
  "@context": "https://schema.org",
  "@id": "https://ebb.arafays.com",
  "@type": "WebApplication",
  name: "Ebb",
  alternateName:
    "Ebb - Super Next.js 15 Template with Better-Auth, Drizzle ORM, PostgreSQL, and Shadcn UI",
  about:
    "Ebb - Super  Next.js 15 Template with Better-Auth, Drizzle ORM, PostgreSQL, and Shadcn UI",
  description:
    "Modern Next.js 15 stack with Better-Auth, Drizzle ORM, PostgreSQL, Shadcn UI, and Tailwind v4 for fast, secure web app development.",
  url: "https://ebb.arafays.com",
  keywords: [
    "Next.js 15",
    "Authentication",
    "Better Auth",
    "Drizzle ORM",
    "PostgreSQL",
    "Tailwind CSS",
    "Tailwind CSS V4",
    "Shadcn UI",
    "TypeScript",
    "Full-Stack Template",
    "SEO Schema",
  ],
}
