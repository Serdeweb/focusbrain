import { ShieldCheck, Award, Users, TrendingUp } from 'lucide-react'

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
    icon: Users,
    title: 'Dedicated Doctors',
    desc: 'Our doctors really care! They are excited to be at the forefront of a medical revolution that is healing and enhancing brains and lives, in a way that seemed impossible only a few decades ago.',
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
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            Why Choose Focus Brain Therapy
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto">
            We combine the latest science with cutting-edge technology and compassionate care to
            deliver transformational results.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
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
                <p className="text-[#67656E] text-base leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
