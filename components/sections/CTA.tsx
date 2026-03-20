import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow:   'Ready to Transform?',
  heading:   'Unifying AI for Smarter Decisions and Scalable Innovation',
  subtext:   'Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation through integrated AI solutions.',
  cta:       { label: 'Request Demo',    href: '#contact'  },
  secondary: { label: 'Learn More',      href: '#services' },
}

export default function CTA() {
  return (
    <section className="py-section relative overflow-hidden bg-[#0f0f13]">
      {/* Ambient glow orbs */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[700px] h-[700px] rounded-full bg-brand-500/10 blur-[160px] animate-pulse-glow" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-400/8 blur-[120px]" />
      </div>

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <p className="text-sm font-medium tracking-widest uppercase text-brand-400 mb-6">
            {CONTENT.eyebrow}
          </p>
          <h2 className="font-heading font-black text-display-xl text-content-primary leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              {CONTENT.heading}
            </span>
          </h2>
          <p className="text-lg text-content-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            {CONTENT.subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-pill scale-110" />
              <a
                href={CONTENT.cta.href}
                className="relative z-10 px-10 py-4 font-body font-semibold bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 transition-all ease-expo-out active:scale-[0.97]"
              >
                {CONTENT.cta.label}
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="px-10 py-4 font-body font-medium border border-white/10 text-content-secondary rounded-card hover:border-brand-500/50 hover:text-content-primary transition-all ease-expo-out"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        {/* Trust indicators */}
        <AnimateIn delay={150}>
          <div className="mt-16 pt-12 border-t border-white/5">
            <p className="text-xs text-content-muted tracking-widest uppercase mb-6">
              ACE BOOM — AI Solutions for the Enterprise
            </p>
            <p className="text-sm text-content-muted/70">
              B5-1-3, Forest Green Condominium, Bandar Sungai Long
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}