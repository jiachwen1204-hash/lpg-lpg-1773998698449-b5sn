I found several hardcoded hex colors that need to be replaced with CSS variables for proper SaaS/Tech design system compliance.

```tsx
import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  'DataFlow Systems',
  'CloudNexus AI',
  'TechVantage',
  'StreamScale',
  'InnovateX Labs',
  'QuantumLeap Tech',
]

interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
}

const testimonials: TestimonialItem[] = [
  {
    quote: 'ACE BOOM transformed how we handle data workflows. We reduced processing time by 65% and our team now focuses on strategic initiatives instead of manual tasks.',
    author: 'Marcus Chen',
    role: 'Chief Technology Officer',
    company: 'DataFlow Systems',
  },
  {
    quote: 'The analytics capabilities are game-changing. We can now make data-driven decisions in real-time, which has significantly improved our operational efficiency.',
    author: 'Sarah Williams',
    role: 'VP of Operations',
    company: 'CloudNexus AI',
  },
]

export default function SocialProof() {
  return (
    <section className="relative py-section bg-surface-primary overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px] pointer-events-none" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
           style={{
             backgroundImage: 'radial-gradient(circle, var(--brand-500) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
           }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Trusted by Industry Leaders
          </span>
          <h2 className="font-heading font-bold text-display-xl text-content-primary mb-4">
            Powering Intelligent Enterprises
          </h2>
          <p className="text-lg text-content-secondary max-w-2xl mx-auto">
            Leading organizations leverage our AI platform to automate workflows, optimize decisions, and drive scalable innovation.
          </p>
        </AnimateIn>

        {/* Client Logo Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-primary to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-4 rounded-card-lg border border-white/[0.08] bg-white/[0.03] text-content-secondary font-semibold text-sm hover:border-brand-500/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className="relative h-full p-8 rounded-card-lg border border-white/[0.08] bg-white/[0.03] hover:border-brand-500/40 hover:bg-white/[0.05] transition-all duration-300 group overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-card-lg" />

                <div className="relative">
                  {/* Quote mark */}
                  <div className="font-heading font-black text-[6rem] leading-none text-brand-500/10 absolute -top-4 -left-2 select-none">
                    &ldquo;
                  </div>

                  <p className="text-content-primary leading-relaxed mb-6 italic relative z-10">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-content-inverse font-heading font-bold text-lg">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-content-primary">{t.author}</div>
                      <div className="text-sm text-content-muted">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Stats bar */}
        <AnimateIn delay={300}>
          <div className="mt-20 p-8 rounded-card-lg border border-white/[0.08] bg-white/[0.02]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '150+', label: 'Enterprise Clients' },
                { value: '40%', label: 'Avg Efficiency Gain' },
                { value: '99.9%', label: 'Platform Uptime' },
                { value: '24/7', label: 'AI-Powered Support' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-heading font-black text-display-lg text-brand-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-content-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
```