import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Now Accepting Early Access',
  headline: 'Unifying AI for',
  highlight: 'Smarter Decisions',
  subline: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  cta: { label: 'Request Demo', href: '#contact' },
  secondary: { label: 'See How It Works', href: '#features' },
  stats: [
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '10x', label: 'Faster Processing' },
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0f13] pt-nav"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Primary glow orb */}
        <div className="absolute top-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-brand-500/20 blur-[180px] animate-float pointer-events-none" />
        {/* Secondary glow orb */}
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[150px] animate-float [animation-delay:3s] pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }} />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-white/10 bg-white/5 text-sm text-content-secondary mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em] text-content-primary mb-6">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-brand-400 via-sky-400 to-brand-400 bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
                  {CONTENT.highlight}
                </span>
                <br />
                <span className="text-content-secondary">&</span>{' '}
                <span className="text-content-primary">Scalable Innovation</span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="text-lg md:text-xl text-content-secondary/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-card scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative px-8 py-4 font-body font-medium bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 transition-all ease-expo-out active:scale-[0.97]"
                  >
                    {CONTENT.cta.label}
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="group px-8 py-4 font-body font-medium border border-white/10 text-content-primary rounded-card hover:border-brand-500/50 hover:text-brand-400 transition-all ease-expo-out flex items-center gap-2"
                >
                  {CONTENT.secondary.label}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 pt-8 border-t border-white/10">
                {CONTENT.stats.map(stat => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="font-heading font-black text-4xl text-brand-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-content-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating UI Mockup */}
          <AnimateIn delay={200} direction="left" className="hidden lg:block relative">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="rounded-card-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 shadow-card-lg">
                <div className="flex items-center justify-between mb-6">
                  <span className="label-sm text-white/50">AI Processing Status</span>
                  <span className="text-xs text-brand-400 bg-brand-400/10 px-2 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                    Active
                  </span>
                </div>
                {/* Fake analytics chart */}
                <div className="flex items-end gap-1 h-24 mb-6">
                  {[30, 55, 40, 70, 50, 85, 60, 90, 75, 95, 80, 100].map((h, i) => (
                    <div key={i}
                      className="flex-1 rounded-sm transition-all duration-300"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, #0EA5E9, #38bdf8)`,
                        opacity: i === 11 ? 1 : 0.3 + (i / 11) * 0.5,
                      }} />
                  ))}
                </div>
                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Automation', value: '847', trend: '+12%', color: 'text-brand-400' },
                    { label: 'Analytics', value: '99.8%', trend: '↑', color: 'text-sky-400' },
                    { label: 'Workflows', value: '24/7', trend: 'Optimal', color: 'text-emerald-400' },
                  ].map(m => (
                    <div key={m.label} className="rounded-card bg-white/[0.04] p-3 border border-white/5">
                      <div className="label-sm text-white/40 mb-1">{m.label}</div>
                      <div className="font-heading font-bold text-white text-lg">{m.value}</div>
                      <div className={`text-xs mt-0.5 ${m.color}`}>{m.trend}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge - top right */}
              <div className="absolute -top-4 -right-4 card-glass p-3 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">AI Powered</div>
                  <div className="text-xs text-white/50">Real-time sync</div>
                </div>
              </div>

              {/* Floating metric card - bottom left */}
              <div className="absolute -bottom-4 -left-4 card-glass p-4 flex items-center gap-3 animate-float [animation-delay:1.5s]">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 text-sm">↑</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Efficiency</div>
                  <div className="font-heading font-bold text-2xl text-emerald-400">94%</div>
                </div>
              </div>

              {/* Floating achievement badge - bottom right */}
              <div className="absolute -right-8 bottom-12 card-glass p-3 flex items-center gap-2 animate-float [animation-delay:2s]">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-xs font-semibold text-white">Scalable</div>
                  <div className="text-xs text-white/50">10x faster</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Gradient line divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
    </section>
  )
}