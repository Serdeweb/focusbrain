import { Activity, Brain, Zap, Heart } from 'lucide-react'
import Image from 'next/image'

const pillars = [
  {
    icon: Activity,
    title: 'Physical Activity',
    desc: 'Targeted exercises that stimulate neural pathways, build coordination, and strengthen the body-brain connection.',
  },
  {
    icon: Brain,
    title: 'Cognitive Exercises',
    desc: "Customized brain challenges to sharpen memory, processing speed, focus, and decision-making.",
  },
  {
    icon: Zap,
    title: 'Sensory Integration',
    desc: "Multisensory stimulation to strengthen neuroplasticity and build your brain's cognitive reserve.",
  },
  {
    icon: Heart,
    title: 'Emotional Regulation',
    desc: 'Stress and mood regulation techniques that support brain health, recovery, and overall well-being.',
  },
]

export default function WhatWeDo() {
  return (
    <section id="about" className="py-24 bg-[#ECFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Our Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            Introducing the{' '}
            <span className="text-[#005FDE]">Cognitive Circuit Training®</span>{' '}
            Program
          </h2>
          <p className="text-[#67656E] text-lg max-w-3xl mx-auto leading-relaxed">
            Our board-certified neurologists lead care using advanced diagnostic tools and prescribe
            individualized therapy plans — delivered through our proprietary CCT Program. Each
            session is customized and matched to your specific needs.
          </p>
        </div>

        {/* Split: Image + CCT description */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden h-80 lg:h-96 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85&auto=format&fit=crop"
              alt="Cognitive Circuit Training therapy session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F61]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-5 py-3 inline-block">
                <span className="text-white font-bold text-sm">Cognitive Circuit Training® Session</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0A2F61] rounded-3xl px-8 py-10 text-white relative overflow-hidden h-full flex items-center">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, #0ED8FE 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <p className="relative z-10 text-lg text-white/85 leading-relaxed">
              CCT integrates{' '}
              <span className="text-[#0ED8FE] font-semibold">physical activity</span>,{' '}
              <span className="text-[#0ED8FE] font-semibold">cognitive exercises</span>,{' '}
              <span className="text-[#0ED8FE] font-semibold">sensory integration</span>, and{' '}
              <span className="text-[#0ED8FE] font-semibold">emotional regulation</span> to promote{' '}
              <strong className="text-white">neuroplasticity</strong> and optimize brain recovery.
              Together, these strengthen your brain's cognitive reserve — its natural backup system.
            </p>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#E2E2E2] hover:shadow-lg hover:border-[#005FDE]/30 transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-[#005FDE]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#005FDE] transition-colors">
                <Icon size={22} className="text-[#005FDE] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#0A2F61] text-lg mb-2">{title}</h3>
              <p className="text-[#67656E] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
