import type { Metadata } from 'next'
import { Sora, Outfit } from 'next/font/google'
import './globals.css'

const headingFont = Sora({
  subsets: ['latin'],
  weight: ["600","700"],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500"],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Generated landing page',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
