'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// @lpg: Update navLinks labels and hrefs to match the company's page type.
// For 1-Page: use anchor links (#services, #about, #contact)
// For 5-Pages: use real routes (/about, /services, /contact, /faq)
// IMPORTANT: Keep this static array — only change label/href values.
// Do NOT replace with .map() on a string array or compute hrefs dynamically.
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

// @lpg: Replace with real company name and CTA
const BRAND_NAME = 'Company Name'
const CTA = { label: 'Get Started', href: '#contact' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-surface-border shadow-card'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-nav">
        <Link
          href="/"
          className="font-heading font-bold text-xl text-content-primary hover:text-brand-500 transition-colors"
        >
          {BRAND_NAME}
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-content-muted hover:text-content-primary rounded-card hover:bg-surface-raised transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={CTA.href}
            className="px-5 py-2.5 text-sm font-medium bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 hover:shadow-glow-sm transition-all"
          >
            {CTA.label}
          </a>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-card text-content-muted hover:text-content-primary hover:bg-surface-raised transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface border-b border-surface-border">
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-content-muted hover:text-content-primary rounded-card hover:bg-surface-raised transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={CTA.href}
                className="block px-5 py-3 text-sm font-medium text-center bg-brand-500 text-content-inverse rounded-card"
              >
                {CTA.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
