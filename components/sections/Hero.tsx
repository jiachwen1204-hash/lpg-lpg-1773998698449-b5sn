import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Replace all content with real company values
const CONTENT = {
  badge:    'Trusted by 500+ businesses',
  headline: 'We Help Businesses',
  highlight: 'Grow',  // @lpg: key word shown in brand gradient
  subline:  'Professional services that deliver real results. Our expert team works with you every step of the way.',
  cta:      { label: 'Get Started', href: '#contact' },
  secondary:{ label: 'Learn More',  href: '#about'   },
  stats: [
    { value: '10+',  label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients'    },
    { value: '98%',  label: 'Satisfaction Rate'},
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface pt-nav"
    >
      {/* Ambient glow orb */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-[180px] pointer-events-none animate-pulse-glow"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section text-center">
        {/* Badge */}
        <AnimateIn delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-surface-border bg-surface-raised text-sm text-content-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            {CONTENT.badge}
          </div>
        </AnimateIn>

        {/* Headline with gradient highlight */}
        <AnimateIn delay={80}>
          <h1 className="font-heading font-black text-display-xl md:text-display-2xl lg:text-display-hero text-content-primary mb-6">
            {CONTENT.headline}{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              {CONTENT.highlight}
            </span>
          </h1>
        </AnimateIn>

        {/* Subline */}
        <AnimateIn delay={160}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-content-secondary mb-10">
            {CONTENT.subline}
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn delay={240}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
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

        {/* Stats */}
        <AnimateIn delay={320}>
          <div className="flex flex-wrap justify-center gap-12">
            {CONTENT.stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-4xl text-brand-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-content-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
