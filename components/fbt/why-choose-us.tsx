import { ShieldCheck, Award, Stethoscope, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Medicare & Insurance Accepted',
    desc: 'We accept Medicare and most insurance plans, making advanced neurological therapy accessible to those who need it most.',
  },
  {
    icon: Award,
    title: "South Florida's First CCT Program",
    desc: "We're the first and only provider of the proprietary Cognitive Circuit Training® program in South Florida — a one-of-a-kind treatment experience.",
  },
  {
    icon: Stethoscope,
    title: 'Board-Certified Neurologists',
    desc: 'Our care team is led by board-certified neurologists with decades of combined expertise in neurological rehabilitation.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable, Evidence-Based Results',
    desc: 'Our multi-sensory, science-backed approach delivers documented improvements in cognition, balance, mood, and physical function.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#ECFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            Why Focus Brain Therapy
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto">
            We combine clinical expertise, cutting-edge technology, and compassionate care to
            deliver results that matter.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2E2E2] flex gap-6 hover:shadow-lg hover:border-[#005FDE]/25 transition-all group"
            >
              <div className="w-14 h-14 bg-[#005FDE]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#005FDE] transition-colors mt-1">
                <Icon size={26} className="text-[#005FDE] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-black text-[#0A2F61] text-xl mb-2">{title}</h3>
                <p className="text-[#67656E] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="bg-[#0A2F61] rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle, #0ED8FE 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {[
            { value: '10+', label: 'Years of Experience' },
            { value: '4', label: 'Board-Certified Specialists' },
            { value: '#1', label: 'CCT Program in South FL' },
            { value: '100%', label: 'Personalized Care' },
          ].map(({ value, label }) => (
            <div key={label} className="relative z-10">
              <div className="text-[#0ED8FE] font-black text-4xl mb-1">{value}</div>
              <div className="text-white/65 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
