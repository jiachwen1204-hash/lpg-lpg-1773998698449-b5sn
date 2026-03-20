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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: "ACE BOOM",
  description: "We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organiz",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"ACE BOOM","description":"We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.","email":"jiachwen99@gmail.com","address":"B5-1-3, Forest Green Condominium, Bandar Sungai Long"}` }} />
      {children}</body>
    </html>
  )
}
