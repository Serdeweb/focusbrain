import { Activity, Brain, HeartPulse, Waves, User, Sparkles } from 'lucide-react'

const conditions = [
  {
    icon: Activity,
    title: 'Concussions & mTBI',
    desc: 'Mild traumatic brain injuries and post-concussion syndrome from sports accidents, falls, or workplace incidents.',
    color: '#005FDE',
  },
  {
    icon: Brain,
    title: 'Memory Loss & Dementia',
    desc: 'Mild Cognitive Impairment (MCI) and early-stage dementia — we help slow progression and improve quality of life.',
    color: '#0A2F61',
  },
  {
    icon: HeartPulse,
    title: 'Stroke Recovery',
    desc: 'Targeted rehabilitation to help stroke survivors regain cognitive function, balance, and daily independence.',
    color: '#005FDE',
  },
  {
    icon: Waves,
    title: 'Vestibular Disorders',
    desc: 'Balance, coordination, and inner ear conditions that affect movement, stability, and everyday function.',
    color: '#0A2F61',
  },
  {
    icon: User,
    title: 'Cognitive & Emotional',
    desc: 'Cognitive, emotional, or psychological symptoms related to neurological injury, disease, or psychological trauma.',
    color: '#005FDE',
  },
  {
    icon: Sparkles,
    title: 'Brain Maintenance',
    desc: 'Proactive brain health programs for all adults — because the brain is trainable at any age and maintenance matters.',
    color: '#0A2F61',
  },
]

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Who We Help
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            We Accept Referrals<br />for Patients With:
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto">
            Whether you're recovering from an injury or proactively protecting your brain health,
            our team is here for you.
          </p>
        </div>

        {/* Condition Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {conditions.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E2E2E2] p-7 hover:shadow-lg hover:border-[#005FDE]/20 transition-all group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${color}12` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="font-bold text-[#0A2F61] text-lg mb-2">{title}</h3>
              <p className="text-[#67656E] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-[#005FDE] to-[#0D71F7] rounded-3xl p-8 md:p-10 text-center text-white">
          <div className="text-2xl md:text-3xl font-black mb-3">
            Do you worry about getting Dementia or Memory Loss?
          </div>
          <p className="text-white/85 text-lg mb-6 max-w-2xl mx-auto">
            You don't have to wait until it gets worse. Early intervention makes all the difference.
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
    </section>
  )
}
