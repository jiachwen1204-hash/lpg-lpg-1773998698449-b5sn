import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Platform for Automation & Analytics | ACE BOOM",
  description: "Unify automation, analytics, and intelligent workflows with ACE BOOM's AI platform. Enhance efficiency, optimize decisions, and scale innovation. Start today.",
  openGraph: {
    title: "AI Platform — Automate, Analyze, Innovate | ACE BOOM",
    description: "Unify automation, analytics, and intelligent workflows with ACE BOOM. Enhance efficiency, optimize decisions, and drive scalable innovation with AI.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Platform — Automate, Analyze, Innovate | ACE BOOM",
    description: "Unify automation, analytics, and intelligent workflows with ACE BOOM. Enhance efficiency, optimize decisions, and drive scalable innovation with AI.",
  },
}

// @lpg: This is the 1-page layout — sections scroll vertically.
// Add section IDs, adjust order if needed, remove any unused sections.
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
