import { ThemeProvider as NextThemeProvider } from "./theme-provider"

export function RootProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemeProvider>
  )
}
