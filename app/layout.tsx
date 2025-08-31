import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Gurmukh Singh | Sales Engineer & MERN Developer",
  description:
    "Sales/Presales Engineer in Bengaluru delivering tailored demos, PoCs, and solution designs—plus user-centric MERN builds.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed left-2 top-2 z-[100] rounded bg-[var(--color-brand)] px-3 py-2 text-sm font-medium text-black shadow"
        >
          Skip to content
        </a>
        {/* Lock app to dark theme as requested */}
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gurmukh Singh Dadiala",
              jobTitle: "Sales Engineer",
              url: "https://example.com",
              email: "mailto:busygurmukh@gmail.com",
              sameAs: ["https://www.linkedin.com/in/singhgurmukh27"],
            }),
          }}
        />
      </body>
    </html>
  )
}
