import Link from 'next/link'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

const BRAND = {
  name:    'ACE BOOM',
  tagline: 'Unifying AI for smarter decisions and scalable innovation',
  email:   'jiachwen99@gmail.com',
  address: 'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
}

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact', href: '#contact'  },
]

const legal = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-800">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[length:32px_32px]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')] bg-[length:256px_256px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="group inline-block">
              <div className="relative">
                <div className="absolute -inset-2 bg-brand-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative font-heading font-bold text-2xl tracking-tight text-brand-400">
                  {BRAND.name}
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-neutral-400 max-w-xs leading-relaxed">
              {BRAND.tagline}
            </p>
            
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-sm text-neutral-500 hover:text-brand-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-brand-400" />
                </div>
                {BRAND.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-neutral-500">
                <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4 text-brand-400" />
                </div>
                <span className="leading-relaxed">{BRAND.address}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-500 text-white font-medium text-sm hover:bg-brand-700 transition-all duration-300 shadow-glow-sm hover:shadow-glow"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-neutral-100 mb-4">Navigation</h3>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block text-sm text-neutral-400 hover:text-brand-400 transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-neutral-100 mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block text-sm text-neutral-400 hover:text-brand-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © {year} {BRAND.name}. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500">
              Integrated AI solutions for the modern enterprise.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}