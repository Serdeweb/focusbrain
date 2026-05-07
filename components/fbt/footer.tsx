import { MapPin, Phone, Globe } from 'lucide-react'

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A2F61] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ED8FE 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-[#005FDE] flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">F</span>
              </div>
              <div>
                <div className="font-black text-white text-base tracking-tight leading-tight">
                  FOCUS BRAIN
                </div>
                <div className="text-[#0ED8FE] text-[10px] font-bold tracking-[0.2em] uppercase">
                  Therapy
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              South Florida's first personalized brain therapy center. Specializing in neurological
              assessment, diagnosis, treatment, and rehabilitation through our proprietary
              Cognitive Circuit Training® Program.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#005FDE]/30 border border-[#0ED8FE]/20 rounded-full px-4 py-2 text-[#0ED8FE] text-xs font-semibold">
              We accept Medicare & most insurance
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[#0ED8FE] font-bold text-xs uppercase tracking-[0.15em] mb-5">
              Quick Links
            </div>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-[#0ED8FE] text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[#0ED8FE] font-bold text-xs uppercase tracking-[0.15em] mb-5">
              Contact
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={15} className="text-[#0ED8FE] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  10650 W State Rd 84, Suite 208<br />
                  Davie, FL 33324
                </span>
              </div>
              <div className="flex gap-3">
                <Phone size={15} className="text-[#0ED8FE] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:9544244240"
                  className="text-white/60 hover:text-[#0ED8FE] text-sm transition-colors"
                >
                  (954) 424-4240
                </a>
              </div>
              <div className="flex gap-3">
                <Globe size={15} className="text-[#0ED8FE] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">FocusBrainTherapy.com</span>
              </div>
            </div>

            {/* Social (placeholders) */}
            <div className="mt-6">
              <div className="text-[#0ED8FE] font-bold text-xs uppercase tracking-[0.15em] mb-3">
                Follow Us
              </div>
              <div className="flex gap-2">
                {['f', 'in', 'ig'].map((s) => (
                  <div
                    key={s}
                    className="w-8 h-8 bg-white/10 hover:bg-[#005FDE] rounded-lg flex items-center justify-center cursor-pointer transition-colors text-white/60 hover:text-white text-xs font-bold"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© {new Date().getFullYear()} Focus Brain Therapy. All rights reserved.</span>
          <span>Cognitive Circuit Training® is a registered trademark.</span>
        </div>
      </div>
    </footer>
  )
}
