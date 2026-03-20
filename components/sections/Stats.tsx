'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 200,  suffix: '+', label: 'Organizations Empowered' },
  { value: 5000, suffix: '+', label: 'Workflows Automated'     },
  { value: 340,  suffix: '%', label: 'Avg. Efficiency Gains'   },
  { value: 99.9, suffix: '%', label: 'Platform Uptime'         },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target * 10) / 10)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  const displayValue = Number.isInteger(target) ? count : count.toFixed(1)
  return <span ref={ref}>{displayValue}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-section overflow-hidden bg-surface-primary">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
           }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             backgroundSize: '256px 256px',
           }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <AnimateIn className="text-center mb-16">
          <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-content-primary tracking-tight mb-4">
            The Numbers Behind{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              Intelligent Growth
            </span>
          </h2>
          <p className="text-lg text-content-secondary/80 max-w-2xl mx-auto">
            Our AI-powered platform delivers measurable outcomes that transform how organizations operate and scale.
          </p>
        </AnimateIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <div className="relative p-6 rounded-card-lg bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/30 hover:bg-white/[0.05] transition-all duration-300 group">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent group-hover:via-brand-400 transition-all" />

                {/* Glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.05] transition-all duration-500 rounded-card-lg" />

                <div className="relative">
                  <div className="font-heading font-black text-[clamp(2.5rem,5vw,3.5rem)] leading-[1] mb-3">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-content-secondary/70 font-body font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom gradient line */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      </div>
    </section>
  )
}