import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

// @lpg: Replace all company-specific values
const BRAND = {
  name:    'Company Name',
  tagline: 'Your trusted partner for growth.',
  email:   'hello@company.com',
  address: '123 Business Street, City, Country',
}

// @lpg: For 1-Page use anchor links; for 5-Pages use real routes + include all 5 pages
const links = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

const legal = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-raised border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading font-bold text-xl text-content-primary hover:text-brand-500 transition-colors"
            >
              {BRAND.name}
            </Link>
            <p className="mt-3 text-sm text-content-muted max-w-xs">{BRAND.tagline}</p>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 text-sm text-content-muted hover:text-brand-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-content-muted">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {BRAND.address}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary mb-4">Navigation</h3>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-content-muted hover:text-brand-500 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-content-muted hover:text-brand-500 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-border text-center text-sm text-content-muted">
          © {year} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
