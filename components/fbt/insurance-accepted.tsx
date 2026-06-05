import { Phone } from 'lucide-react'

const insurers = [
  'Blue Cross Blue Shield',
  'Medicare',
  'United Healthcare',
  'Aetna',
  'State Workers\' Comp',
  'Federal Workers\' Comp',
]

export default function InsuranceAccepted() {
  return (
    <section id="insurance" className="py-16 bg-[#F4F8FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-3">
          Coverage &amp; Billing
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-[#0A2F61] mb-3">
          Insurance Accepted
        </h2>
        <p className="text-[#67656E] text-lg max-w-2xl mx-auto mb-1">
          Most HMO Plans, Medicare, State Workers&apos; Compensation, Federal Workers&apos; Compensation
        </p>
        <p className="text-[#67656E] text-sm mb-10">
          At this time, Health Savings Accounts (HSAs) are not accepted.
        </p>

        {/* Insurance placeholders */}
        <div className="grid grid-cols-3 max-w-2xl mx-auto gap-4 mb-10">
          {insurers.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-2xl border-2 border-[#E2E2E2] bg-white px-6 py-5 min-w-[160px] hover:border-[#005FDE]/40 hover:shadow-md transition-all"
            >
              <span className="text-[#0A2F61] font-semibold text-sm text-center leading-tight">{name}</span>
            </div>
          ))}
        </div>

        {/* Contact callout */}
        <div className="inline-flex items-center gap-3 bg-white border border-[#005FDE]/20 rounded-full px-6 py-3 shadow-sm">
          <Phone size={15} className="text-[#005FDE] flex-shrink-0" />
          <span className="text-[#0A2F61] font-medium text-sm">
            Contact our office to verify coverage and eligibility.
          </span>
        </div>
      </div>
    </section>
  )
}
