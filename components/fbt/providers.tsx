import Image from 'next/image'
import { User } from 'lucide-react'

const providers = [
  {
    photo: '/Dr.-Lita-Calagua.png',
    name: 'Dr. Lita Calagua, MD',
    title: 'Patient-Focused Neurologist',
    specialty: 'Specialist in Aging, Brain & Cognitive Decline',
    bio: 'Dr. Calagua is a neurologist specializing in age-related neurological conditions including mild cognitive impairment, early dementia, stroke recovery, and chronic headaches. Her calm, compassionate approach — combined with years of experience treating Medicare populations — makes her a trusted advocate for older adults. Fluent in English and Spanish.',
    gradient: 'from-[#005FDE] to-[#0D71F7]',
  },
  {
    photo: '/Alyssa-Vilabila.jpg',
    name: 'Alyssa Villalba, PA-C',
    title: 'Physician Assistant',
    specialty: 'Lead CCT Facilitator / Specialist in Brain-Based Functional Recovery',
    bio: 'Alyssa Villalba is a licensed and board-certified Physician Assistant with a strong clinical foundation in neurology, recovery, and cognitive rehabilitation. As the lead facilitator of the Cognitive Circuit Training® Program at Focus Brain Therapy, Alyssa works hands-on with patients to deliver personalized, evidence-based sessions.',
    gradient: 'from-[#0A2F61] to-[#005FDE]',
  },
  {
    photo: null,
    name: 'Dr. Lisa Huseboe, DC, MS, CBIS',
    title: 'Neuroplastician',
    specialty: 'Founder & Creator of the Cognitive Circuit Training® Program',
    bio: 'Dr. Lisa Huseboe is the founder and visionary behind Focus Brain Therapy and creator of the CCT Program — a multi-sensory, evidence-based approach to repairing and optimizing brain function after injury. With a decade of experience in neurorehabilitation, she has dedicated her career to helping patients recover from brain injury and reduce cognitive decline.',
    gradient: 'from-[#0D71F7] to-[#0ED8FE]',
    initials: 'LH',
  },
  {
    photo: '/Helena-Popovic.png',
    name: 'Dr. Helena Popovic, MD',
    title: 'Consulting Advisor',
    specialty: 'Expert on Brain Health & Neuroplasticity',
    bio: 'Dr. Helena Popovic is an internationally acclaimed medical doctor, keynote speaker, and author specializing in brain optimization, neuroplasticity, and cognitive vitality. As a consulting advisor, she helps guide brain health strategies and tailor interventions that optimize focus, memory, emotional balance, and long-term resilience.',
    gradient: 'from-[#005FDE] to-[#0A2F61]',
  },
]

export default function Providers() {
  return (
    <section id="team" className="py-24 bg-[#ECFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            Meet Our Providers
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto">
            Our board-certified neurologists and clinical specialists bring decades of combined
            experience in neurological rehabilitation and brain health.
          </p>
        </div>

        {/* Provider Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {providers.map(({ photo, name, title, specialty, bio, gradient, initials }) => (
            <div
              key={name}
              className="bg-white rounded-3xl shadow-sm border border-[#E2E2E2] overflow-hidden hover:shadow-xl transition-all group"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

              <div className="p-8">
                <div className="flex items-start gap-5 mb-5">
                  {/* Photo or Avatar */}
                  <div className="flex-shrink-0">
                    {photo ? (
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md border-2 border-[#E2E2E2]">
                        <Image
                          src={photo}
                          alt={name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex flex-col items-center justify-center shadow-lg`}
                      >
                        <User size={22} className="text-white/60 mb-0.5" />
                        <span className="text-white font-black text-sm tracking-wide">
                          {initials}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-1">
                    <h3 className="font-black text-[#0A2F61] text-lg leading-tight">{name}</h3>
                    <div className="text-[#005FDE] font-bold text-sm mt-1">{title}</div>
                    <div className="text-[#67656E] text-xs mt-1 leading-snug italic">{specialty}</div>
                  </div>
                </div>
                <p className="text-[#67656E] text-sm leading-relaxed border-t border-[#E2E2E2] pt-5">
                  {bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#67656E] text-sm mt-10">
          Partner with Focus Brain Therapy for better patient outcomes.{' '}
          <a href="#contact" className="text-[#005FDE] font-semibold hover:underline">
            Contact us today →
          </a>
        </p>
      </div>
    </section>
  )
}
