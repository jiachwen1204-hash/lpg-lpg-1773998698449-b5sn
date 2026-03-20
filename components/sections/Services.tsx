import AnimateIn from '@/components/ui/AnimateIn'
import { Zap, Shield, Star } from 'lucide-react'

// @lpg: Replace with real services — title, description, icon from lucide-react
const services = [
  {
    icon: Zap,
    title: 'Service One',
    description: 'A compelling description of this service and the value it delivers to clients.',
  },
  {
    icon: Shield,
    title: 'Service Two',
    description: 'A compelling description of this service and the value it delivers to clients.',
  },
  {
    icon: Star,
    title: 'Service Three',
    description: 'A compelling description of this service and the value it delivers to clients.',
  },
]

// @lpg: Replace heading and subtext
const HEADING  = 'What We Offer'
const SUBTEXT  = 'Comprehensive solutions tailored to your needs.'

export default function Services() {
  return (
    <section id="services" className="py-section bg-surface-raised">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-3">
            Services
          </p>
          <h2 className="font-heading font-black text-display-lg text-content-primary mb-4">
            {HEADING}
          </h2>
          <p className="max-w-2xl mx-auto text-content-secondary">{SUBTEXT}</p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group h-full p-8 rounded-card-lg border border-surface-border bg-surface hover:border-brand-500 hover:shadow-card-lg transition-all duration-300 ease-expo-out">
                <div className="w-12 h-12 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                  <svc.icon className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                  {svc.title}
                </h3>
                <p className="text-content-secondary leading-relaxed">{svc.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
