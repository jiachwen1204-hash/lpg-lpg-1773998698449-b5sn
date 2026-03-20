import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Brain, Cpu, LineChart, Shield, Zap, Users } from 'lucide-react'

const CONTENT = {
  label: 'About ACE BOOM',
  heading: 'Unifying AI for',
  headingAccent: 'smarter decisions',
  headingLine2: 'and scalable innovation',
  description: 'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  values: [
    { icon: Brain, title: 'Intelligent Automation', desc: 'Streamline complex workflows with AI-driven process optimization' },
    { icon: LineChart, title: 'Data-Driven Insights', desc: 'Transform raw data into actionable intelligence at scale' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Built with compliance and data protection at its core' },
    { icon: Users, title: 'Collaborative Growth', desc: 'Empowering teams with unified tools that scale together' },
  ],
  stats: [
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '500+', label: 'Organizations Served' },
    { value: '24/7', label: 'Intelligent Support' },
  ],
  cta: { label: 'Request Demo', href: '#contact' },
}

export default function About() {
  return (
    <section id="about" className="relative py-section bg-[#0f0f13] overflow-hidden">
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[180px] animate-float" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-400/8 blur-[160px] animate-float [animation-delay:3s]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              {CONTENT.label}
            </span>
          </AnimateIn>
          
          <AnimateIn delay={100}>
            <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.03em] mb-6">
              {CONTENT.heading}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-[length:200%_auto] animate-shimmer">
                {CONTENT.headingAccent}
              </span>
              <br />
              {CONTENT.headingLine2}
            </h2>
          </AnimateIn>
          
          <AnimateIn delay={200}>
            <p className="text-lg md:text-xl text-content-secondary/80 max-w-2xl mx-auto leading-relaxed font-body">
              {CONTENT.description}
            </p>
          </AnimateIn>
        </div>

        {/* Stats row */}
        <AnimateIn delay={300}>
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-20">
            {CONTENT.stats.map((stat, i) => (
              <div key={stat.label} className="relative p-6 rounded-card-lg bg-white/[0.03] border border-white/8 text-center group hover:border-brand-500/30 hover:bg-white/[0.05] transition-all duration-300">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-heading font-black text-[clamp(1.75rem,4vw,2.5rem)] text-brand-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-content-secondary/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CONTENT.values.map((value, i) => (
            <AnimateIn key={value.title} delay={400 + i * 80}>
              <div className="group relative p-6 rounded-card-lg bg-white/[0.02] border border-white/8 hover:border-brand-500/30 hover:bg-white/[0.04] transition-all duration-300 h-full">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-500 rounded-card-lg" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-content-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-content-secondary/70 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn delay={700}>
          <div className="text-center">
            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-brand-500/30 blur-2xl rounded-pill scale-110 pointer-events-none" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-content-inverse rounded-pill hover:bg-brand-600 shadow-glow transition-all duration-300 group"
              >
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {CONTENT.cta.label}
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}