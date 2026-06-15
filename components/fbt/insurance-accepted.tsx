import { Phone } from 'lucide-react'

const insurers = [
  'Blue Cross Blue Shield',
  'Medicare',
  'United Healthcare',
  'Aetna',
  'State Workers\' Comp',
  'Federal Workers\' Comp',
]

const weHelpList = [
  'Recover from strokes, concussions and traumatic brain injuries',
  'Overcome brain fog in menopause and long COVID',
  'Improve executive function and focus in ADHD',
  'Enhance their memory, concentration, and overall brain performance',
  'Protect their brain from Parkinson\'s, Alzheimer\'s and other dementias',
]

const whoWeHelpList = [
  'Have you ever had a concussion, traumatic brain injury, or stroke?',
  'Have you been diagnosed with CTE (Chronic Traumatic Encephalopathy)?',
  'Do you have ADHD?',
  'Are you suffering from \'long COVID\'?',
  'Are you approaching or going through menopause and experiencing brain fog?',
  'Do you feel that you aren\'t as sharp as you used to be?',
  'Are you worried about getting dementia or memory loss?',
  'Have you been diagnosed with Parkinson\'s disease, mild cognitive impairment (MCI), Alzheimer\'s disease or another type of dementia?',
  'Have you been told that your condition is incurable, and your brain function will continue to decline?',
]

export default function InsuranceAccepted() {
  return (
    <section id="insurance" className="py-16 bg-[#F4F8FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* We help people */}
        <div className="mb-10">
          <h3 className="text-2xl font-black text-[#0A2F61] mb-4">We help people:</h3>
          <ul className="space-y-3">
            {weHelpList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#3D3D3D] text-base">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#005FDE] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* WHO WE HELP */}
        <div className="mb-10">
          <h3 className="text-2xl font-black text-[#0A2F61] mb-4">WHO WE HELP</h3>
          <ul className="space-y-3 mb-6">
            {whoWeHelpList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#3D3D3D] text-base">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#005FDE] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#3D3D3D] text-base leading-relaxed">
            We&apos;re here to show you that regardless of your symptoms or your diagnosis, it&apos;s never
            too late to turn things around. Your brain has the power to heal, recover and improve,
            through the revolutionary science of neuroplasticity.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-[#005FDE]/15 mb-10" />

        {/* Insurance Accepted */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-[#0A2F61] mb-3">
            Insurance Accepted
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto mb-10">
            Most PPO Plans, Medicare, State Workers&apos; Compensation, Federal Workers&apos; Compensation
          </p>

          {/* Insurance placeholders */}
          <div className="grid grid-cols-3 max-w-2xl mx-auto gap-4 mb-10">
            {insurers.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-2xl border-2 border-[#E2E2E2] bg-white px-6 py-5 hover:border-[#005FDE]/40 hover:shadow-md transition-all"
              >
                <span className="text-[#0A2F61] font-semibold text-sm text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>

          {/* Contact callout */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#005FDE]/20 rounded-full px-6 py-3 shadow-sm">
            <Phone size={15} className="text-[#005FDE] flex-shrink-0" />
            <span className="text-[#0A2F61] font-medium text-base">
              Contact our office to verify coverage and eligibility.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
