import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Replace with a compelling, company-specific CTA
const CONTENT = {
  eyebrow:   'Ready to get started?',
  heading:   'Take Your Business to the Next Level',
  subtext:   'Join hundreds of businesses that have transformed their operations with our help.',
  cta:       { label: 'Start Today',    href: '#contact'  },
  secondary: { label: 'View Our Work',  href: '#services' },
}

export default function CTA() {
  return (
    <section className="py-section relative overflow-hidden bg-surface">
      {/* Brand glow */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-brand-500/12 blur-[140px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimateIn>
          <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-4">
            {CONTENT.eyebrow}
          </p>
          <h2 className="font-heading font-black text-display-xl text-content-primary leading-tight mb-6">
            {CONTENT.heading}
          </h2>
          <p className="text-lg text-content-secondary mb-10">{CONTENT.subtext}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTENT.cta.href}
              className="px-8 py-4 font-body font-medium bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 hover:shadow-glow transition-all ease-expo-out active:scale-[0.97]"
            >
              {CONTENT.cta.label}
            </a>
            <a
              href={CONTENT.secondary.href}
              className="px-8 py-4 font-body font-medium border border-surface-border text-content-primary rounded-card hover:border-brand-500 hover:text-brand-500 transition-all ease-expo-out"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
