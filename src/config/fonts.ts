import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"

export const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})
