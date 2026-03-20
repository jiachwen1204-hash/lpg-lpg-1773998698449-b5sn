Looking at the file, I found one issue:

1. **Hardcoded hex color**: `bg-[#0f0f13]` on line 50 should use a CSS variable instead.

Here's the corrected file:

```tsx
import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'
import { Brain, BarChart3, Workflow, Rocket } from 'lucide-react'

interface ServiceItem {
  icon: React.ElementType
  title: string
  description: string
}

const CONTENT = {
  badge: 'What We Do',
  heading: 'Intelligent AI Solutions',
  subtext:
    'We unify automation, analytics, and intelligent workflows into one centralized platform—empowering your organization to enhance efficiency, optimize decisions, and drive scalable digital innovation.',
  items: [
    {
      icon: Brain,
      title: 'AI Automation',
      description:
        'Seamlessly integrate intelligent automation across your operations, reducing manual effort and accelerating throughput with AI-driven workflows.',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description:
        'Transform raw data into actionable insights with advanced analytics that optimize decision-making and reveal hidden growth opportunities.',
    },
    {
      icon: Workflow,
      title: 'Intelligent Workflows',
      description:
        'Orchestrate complex business processes with AI-powered workflows that adapt, learn, and continuously improve over time.',
    },
    {
      icon: Rocket,
      title: 'Scalable Innovation',
      description:
        'Deploy future-ready AI infrastructure designed to grow with your organization and evolve with emerging technology demands.',
    },
  ] satisfies ServiceItem[],
}

export default function Services() {
  return (
    <section id="services" className="relative py-section bg-surface-900 overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/[0.04] blur-[150px] pointer-events-none" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brand-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            {CONTENT.badge}
          </span>
          <h2 className="font-heading font-black text-display-lg text-content-primary mb-4">
            {CONTENT.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-content-secondary text-lg leading-relaxed">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTENT.items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-card-lg border border-white/[0.06] bg-white/[0.02] hover:border-brand-500/30 hover:bg-white/[0.04] transition-all duration-300 ease-expo-out overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-300 rounded-card-lg" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-content-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
```