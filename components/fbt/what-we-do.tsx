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
    desc: 'Customized brain challenges to sharpen memory, processing speed, focus, and decision-making.',
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
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            <span className="text-[#005FDE]">Cognitive Circuit Training® (CCT)</span>
          </h2>
          <p className="text-[#0A2F61] text-xl font-bold max-w-3xl mx-auto mb-2">
            Our team is here for you.
          </p>
          <p className="text-[#67656E] text-base max-w-3xl mx-auto leading-relaxed text-center">
            Whether you&apos;re recovering from an injury or proactively supporting your brain health.
          </p>
        </div>

        {/* Split: Image + CCT description */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden h-80 lg:h-96 shadow-2xl">
            <Image
              src="/brain/larger%20space%20RCCC%20training%20studio.jpg"
              alt="Focus Brain Therapy facility — CCT training room"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F61]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-5 py-3 inline-block">
                <span className="text-white font-bold text-sm">Our Facility — Davie, FL</span>
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
            <p className="relative z-10 text-lg text-white/90 leading-relaxed">
              CCT is based on the latest cutting-edge research in neuroscience and cognitive
              resilience. It integrates{' '}
              <span className="text-[#0ED8FE] font-semibold">physical activity</span>,{' '}
              <span className="text-[#0ED8FE] font-semibold">cognitive exercises</span>,{' '}
              <span className="text-[#0ED8FE] font-semibold">sensory integration</span>, and{' '}
              <span className="text-[#0ED8FE] font-semibold">emotional regulation</span> to promote{' '}
              <strong className="text-white">neuroplasticity</strong>, stimulate recovery, and
              optimize brain function.
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
              <p className="text-[#67656E] text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
