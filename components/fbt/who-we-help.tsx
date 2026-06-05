'use client'

import { useState } from 'react'
import { Zap, HeartPulse, Wind, AlertCircle, Brain, Waves, Trophy, Briefcase, GraduationCap, X } from 'lucide-react'

type Category = {
  icon: React.ElementType
  title: string
  desc: string
}

type SubSection = {
  id: string
  title: string
  subtitle: string
  accentColor: string
  categories: Category[]
  cols: string
}

const subsections: SubSection[] = [
  {
    id: 'repair',
    title: 'REPAIR',
    subtitle: 'Recover from injury and neurological conditions.',
    accentColor: '#005FDE',
    cols: 'sm:grid-cols-2 lg:grid-cols-4',
    categories: [
      {
        icon: Zap,
        title: 'Concussion / mTBI',
        desc: 'Brain fog, headaches, dizziness, memory problems, fatigue, and light sensitivity.',
      },
      {
        icon: HeartPulse,
        title: 'Stroke Recovery',
        desc: 'Helping the brain build new routes after blood flow injury.',
      },
      {
        icon: Wind,
        title: 'COVID Brain Fog',
        desc: 'For lingering brain fog, fatigue, slower thinking, and poor focus after COVID.',
      },
      {
        icon: AlertCircle,
        title: 'Anoxic / Hypoxic Brain Injury',
        desc: 'When the brain has been affected by reduced oxygen.',
      },
    ],
  },
  {
    id: 'protect',
    title: 'PROTECT',
    subtitle: 'Maintain independence, balance and cognitive reserve.',
    accentColor: '#0A2F61',
    cols: 'sm:grid-cols-2',
    categories: [
      {
        icon: Brain,
        title: 'Mild Cognitive Impairment (MCI)',
        desc: 'Memory changes, slower processing, word-finding problems, and reduced mental sharpness.',
      },
      {
        icon: Waves,
        title: 'Balance Issues',
        desc: 'Dizziness, unsteadiness, fall risk, vestibular problems, and confidence with walking.',
      },
    ],
  },
  {
    id: 'enhance',
    title: 'ENHANCE',
    subtitle: 'Train your brain for peak performance.',
    accentColor: '#005FDE',
    cols: 'sm:grid-cols-3',
    categories: [
      {
        icon: Trophy,
        title: 'Sports Performance',
        desc: 'Reaction time, visual tracking, focus, balance, and decision speed.',
      },
      {
        icon: Briefcase,
        title: 'Executive Performance',
        desc: 'Sharper focus, better memory, faster decisions, stress resilience, and cognitive endurance.',
      },
      {
        icon: GraduationCap,
        title: 'Student Performance',
        desc: 'Attention, memory, processing speed, learning efficiency, and test confidence.',
      },
    ],
  },
]

export default function WhoWeHelp() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="how-we-help" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            How We Help
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-4">
            Our Team Is Here for You
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto mb-5">
            Whether you&apos;re recovering from an injury or proactively supporting your brain health.
          </p>

          {/* Blue bar */}
          <div className="inline-flex items-center gap-3 bg-[#ECFAFF] border border-[#005FDE]/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-[#0ED8FE] rounded-full flex-shrink-0" />
            <span className="text-[#0A2F61] font-semibold text-sm">
              Flexible Payment Options —{' '}
              <span className="text-[#005FDE]">Insurance, PPO, Self-Pay, Worker&apos;s Compensation</span>
            </span>
          </div>
        </div>

        {/* REPAIR / PROTECT / ENHANCE */}
        <div className="mt-16 space-y-20">
          {subsections.map(({ id, title, subtitle, accentColor, categories, cols }) => (
            <div key={id}>
              <div className="mb-8">
                <h3
                  className="text-3xl lg:text-4xl font-black tracking-widest uppercase"
                  style={{ color: accentColor }}
                >
                  {title}
                </h3>
                <p className="text-[#67656E] text-lg mt-1">{subtitle}</p>
              </div>

              <div className={`grid ${cols} gap-6`}>
                {categories.map(({ icon: Icon, title: catTitle, desc }) => (
                  <div
                    key={catTitle}
                    className="rounded-2xl border border-[#E2E2E2] p-7 hover:shadow-lg hover:border-[#005FDE]/20 transition-all flex flex-col"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                      style={{ backgroundColor: `${accentColor}12` }}
                    >
                      <Icon size={22} style={{ color: accentColor }} />
                    </div>
                    <h4 className="font-bold text-[#0A2F61] text-lg mb-2">{catTitle}</h4>
                    <p className="text-[#67656E] text-sm leading-relaxed flex-1">{desc}</p>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="mt-5 text-[#005FDE] text-sm font-semibold hover:underline text-left"
                    >
                      Learn More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#005FDE] to-[#0D71F7] rounded-3xl p-8 md:p-10 text-center text-white">
          <div className="text-2xl md:text-3xl font-black mb-3">
            Do you worry about getting Dementia or Memory Loss?
          </div>
          <p className="text-white/85 text-lg mb-6 max-w-2xl mx-auto">
            You don&apos;t have to wait until it gets worse. Early intervention makes all the difference.
            Talk to our team today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#005FDE] hover:bg-[#ECFAFF] px-8 py-3.5 rounded-full font-bold text-base transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-[#67656E] hover:text-[#0A2F61] transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="text-5xl font-black text-[#005FDE] mb-3">Coming Soon</div>
            <p className="text-[#67656E] text-base">
              Detailed information for this condition is being prepared. Check back soon!
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-7 bg-[#005FDE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0D71F7] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
