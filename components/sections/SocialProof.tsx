import AnimateIn from '@/components/ui/AnimateIn'

// @lpg: Replace with real client names or trust signals
const clients = ['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five', 'Client Six']

// @lpg: Replace with real testimonials from the company's industry
const testimonials = [
  {
    quote:  'Working with this team transformed our business. The results exceeded every expectation.',
    author: 'Jane Smith',
    role:   'CEO, Example Corp',
  },
  {
    quote:  'Professional, reliable, and truly exceptional. I would recommend them without hesitation.',
    author: 'John Doe',
    role:   'Director, Another Company',
  },
]

export default function SocialProof() {
  return (
    <section className="py-section bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-12">
          <p className="text-sm text-content-muted uppercase tracking-widest">
            Trusted by leading organizations
          </p>
        </AnimateIn>

        {/* Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="flex gap-12 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3 rounded-card border border-surface-border bg-surface-raised text-content-muted font-medium text-sm"
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
              <div className="h-full p-8 rounded-card-lg border border-surface-border bg-surface-raised hover:border-brand-500 transition-colors duration-300">
                <p className="text-content-primary leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-medium text-content-primary">{t.author}</div>
                  <div className="text-sm text-content-muted">{t.role}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
