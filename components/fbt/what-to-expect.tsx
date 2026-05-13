const steps = [
  {
    num: '01',
    title: 'Comprehensive Neurological Evaluation',
    desc: 'Advanced diagnostic testing performed by board-certified neurologists to understand your unique condition and baseline function.',
  },
  {
    num: '02',
    title: 'Customized Therapy Plan',
    desc: 'A personalized Cognitive Circuit Training® plan built around your clinical findings, personal goals, and lifestyle.',
  },
  {
    num: '03',
    title: 'Expert-Monitored Treatment',
    desc: 'Therapy monitored by neurologists and delivered by skilled clinicians at every step of your recovery journey.',
  },
  {
    num: '04',
    title: 'Multi-Sensory CCT Sessions',
    desc: 'Engaging, multi-sensory program sessions including multisensory stimulation, balance training, brain challenges, and coordination drills.',
  },
  {
    num: '05',
    title: 'Measurable Outcomes',
    desc: 'Track real, documented progress in cognition, balance, mood, and physical function — with clear milestones along the way.',
  },
  {
    num: '06',
    title: 'Long-Term Brain Health Support',
    desc: 'Clear return-to-work pathways and ongoing support to ensure lasting results and a stronger brain for life.',
  },
]

export default function WhatToExpect() {
  return (
    <section id="services" className="py-24 bg-[#0A2F61] relative overflow-hidden">
      {/* BG pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ED8FE 1px, transparent 1px)',
          backgroundSize: '35px 35px',
        }}
      />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#005FDE]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0ED8FE]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#0ED8FE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Your Path to{' '}
            <span className="text-[#0ED8FE]">Recovery</span>
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            From your first evaluation to long-term support, every step is designed around your
            specific needs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/12 hover:border-[#0ED8FE]/30 transition-all group"
            >
              <div className="text-[#0ED8FE]/40 font-black text-5xl leading-none mb-4 group-hover:text-[#0ED8FE]/60 transition-colors">
                {num}
              </div>
              <h3 className="font-bold text-white text-lg mb-3 leading-snug">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
