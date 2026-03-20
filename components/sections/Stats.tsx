'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Replace with real company stats — specific and credible numbers
const stats = [
  { value: 500,  suffix: '+', label: 'Projects Completed' },
  { value: 98,   suffix: '%', label: 'Client Satisfaction' },
  { value: 10,   suffix: '+', label: 'Years in Business'   },
  { value: 50,   suffix: '+', label: 'Team Members'        },
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
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-section bg-surface-raised">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} className="text-center">
              <div className="font-heading font-black text-display-md text-brand-500 mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-content-muted">{stat.label}</div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
