import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Studio Haus",
  description: "We live in a world of here today gone tomorrow.",
  icons: {
    icon: [
      { url: 'favicon/favicon.ico' },                          // default
      { url: 'favicon/favicon-16x16.png', sizes: '16x16' },
      { url: 'favicon/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: 'favicon/apple-touch-icon.png',
    shortcut: 'favicon/favicon.ico',
  },
  manifest: 'favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
