import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Margaret T.',
    age: '68',
    condition: 'Early-Stage Dementia',
    quote:
      "After just 8 weeks at Focus Brain Therapy, my family noticed a real difference. I'm sharper, more present, and feel like myself again. The team truly cares about every patient.",
    stars: 5,
    initials: 'MT',
  },
  {
    name: 'Carlos R.',
    age: '42',
    condition: 'Post-Concussion Recovery',
    quote:
      'I struggled for months after my injury — foggy, off-balance, unable to work. The CCT Program gave me structure and real results. I returned to work in 10 weeks. Life-changing.',
    stars: 5,
    initials: 'CR',
  },
  {
    name: 'Patricia L.',
    age: '74',
    condition: 'Stroke Recovery',
    quote:
      "Dr. Calagua's approach was unlike anything I experienced elsewhere. She listened, adjusted my plan weekly, and never gave up on me. I'm walking independently again.",
    stars: 5,
    initials: 'PL',
  },
  {
    name: 'James M.',
    age: '55',
    condition: 'Memory & Focus Training',
    quote:
      "I came in proactively — no injury, just noticing my memory slipping. The brain maintenance program is incredible. I feel 10 years younger mentally. Highly recommend.",
    stars: 5,
    initials: 'JM',
  },
  {
    name: 'Sofia V.',
    age: '38',
    condition: 'Vestibular Disorder',
    quote:
      'Alyssa is phenomenal. Her patience and expertise helped me get my balance back after a year of suffering. The multisensory sessions made every visit feel purposeful.',
    stars: 5,
    initials: 'SV',
  },
  {
    name: 'Robert K.',
    age: '61',
    condition: 'Traumatic Brain Injury',
    quote:
      "Dr. Huseboe created something truly special with the CCT Program. The combination of physical, cognitive, and sensory work is genius. I'm back to 95% of my prior function.",
    stars: 5,
    initials: 'RK',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0A2F61] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ED8FE 1px, transparent 1px)',
          backgroundSize: '35px 35px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#005FDE]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0ED8FE]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#0ED8FE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Patient Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Real Patients.{' '}
            <span className="text-[#0ED8FE]">Real Results.</span>
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Hear from patients who reclaimed their lives through the Cognitive Circuit Training® Program.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, age, condition, quote, stars, initials }) => (
            <div
              key={name}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/12 hover:border-[#0ED8FE]/30 transition-all flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#0ED8FE] fill-[#0ED8FE]" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-6">
                <Quote size={20} className="text-[#0ED8FE]/40 absolute -top-1 -left-1" />
                <p className="text-white/80 text-sm leading-relaxed pl-5 italic">"{quote}"</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#005FDE] to-[#0ED8FE] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xs">{initials}</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{name}, {age}</div>
                  <div className="text-[#0ED8FE] text-xs">{condition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#005FDE] hover:bg-[#0D71F7] text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-[#005FDE]/30"
          >
            Start Your Recovery Story
          </a>
        </div>
      </div>
    </section>
  )
}
