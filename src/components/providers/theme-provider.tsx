"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

import { Toaster } from "../ui/sonner"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <Toaster
        position="bottom-right"
        richColors
        theme="system"
        closeButton
        expand
      />
    </NextThemesProvider>
  )
}
