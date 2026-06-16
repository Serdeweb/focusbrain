'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Maria S.',
    text: "Focus Brain Therapy has been life-changing for me. After my stroke I didn't think I'd ever feel like myself again. Dr. Calagua and her team gave me hope and real results. I'm forever grateful.",
    initials: 'MS',
  },
  {
    name: 'David R.',
    text: "The Cognitive Circuit Training program is incredible. My memory and focus have improved significantly since starting. The entire staff is professional, caring, and truly invested in your progress.",
    initials: 'DR',
  },
  {
    name: 'Linda T.',
    text: "After my concussion I struggled for months. The CCT Program at Focus Brain Therapy gave me structure and results. I'm back to work and feeling like myself again. Highly recommend!",
    initials: 'LT',
  },
  {
    name: 'Robert M.',
    text: "I came in proactively to support my brain health and the program has been amazing. The team is knowledgeable, compassionate, and the results speak for themselves. Five stars without hesitation.",
    initials: 'RM',
  },
  {
    name: 'Patricia G.',
    text: "Alyssa and the whole team are phenomenal. My balance and cognitive function have improved tremendously. Every session feels purposeful and the staff truly cares about your recovery.",
    initials: 'PG',
  },
  {
    name: 'James H.',
    text: "Dr. Lisa and her team created something truly special. The combination of physical, cognitive, and sensory work is unlike anything I've experienced. I'm back to 90% of my prior function.",
    initials: 'JH',
  },
  {
    name: 'Susan K.',
    text: "I was skeptical at first but the results after 8 weeks speak for themselves. My family noticed a real difference. I'm sharper, more present, and feel like myself again. Thank you FBT!",
    initials: 'SK',
  },
  {
    name: 'Carlos V.',
    text: "The personalized approach here is what sets Focus Brain Therapy apart. They really take the time to understand your specific situation and tailor the program accordingly. Outstanding care.",
    initials: 'CV',
  },
  {
    name: 'Angela B.',
    text: "After being diagnosed with mild cognitive impairment I felt hopeless. Focus Brain Therapy changed that. The science behind their program is real and the team is world-class.",
    initials: 'AB',
  },
]

const PER_PAGE = 6

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(testimonials.length / PER_PAGE)
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

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
          <p className="text-white/65 text-lg max-w-2xl mx-auto text-center">
            Hear from patients who reclaimed their lives
            <br className="hidden sm:block" />
            through the Cognitive Circuit Program.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(({ name, text, initials }) => (
            <div
              key={name}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/12 hover:border-[#0ED8FE]/30 transition-all flex flex-col"
            >
              {/* Google-style header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#005FDE] to-[#0ED8FE] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xs">{initials}</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{name}</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-white/80 text-sm leading-relaxed flex-1 italic">&ldquo;{text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#005FDE] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <span className="text-white/60 text-sm">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#005FDE] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
