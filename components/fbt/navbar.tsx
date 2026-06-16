'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const mainLinks = [
  { label: 'What We Do', href: '#services' },
  { label: 'Who We Help', href: '#how-we-help' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Our Team', href: '#team' },
  { label: 'Podcast', href: '#podcasts' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>

      {/* Top announcement bar */}
      <div className="bg-[#0A2F61] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-0">
          <span className="text-white/80 text-xs sm:text-sm text-center">
            Medicare &amp; PPO Insurance Accepted &nbsp;|&nbsp; Financing Available
          </span>
          <a
            href="tel:9544244240"
            className="flex items-center gap-1.5 text-[#0ED8FE] font-bold text-xs sm:text-sm hover:text-white transition-colors"
          >
            <Phone size={13} />
            (954) 424-4240
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-[#EBF5FF] border-b border-[#005FDE]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">

            {/* Mobile: CTA button where logo was */}
            <a
              href="#contact"
              className="md:hidden flex items-center gap-2 bg-[#005FDE] text-white px-4 py-2.5 rounded-full font-semibold text-xs transition-all shadow-md whitespace-nowrap"
            >
              Book Your Free Consultation
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {mainLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[#0A2F61] hover:text-[#005FDE] font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="flex items-center gap-2 bg-[#005FDE] hover:bg-[#0D71F7] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-[#005FDE]/25 whitespace-nowrap"
              >
                Book Your Free Consultation
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#005FDE]/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-[#0A2F61]" />
              ) : (
                <Menu size={24} className="text-[#0A2F61]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E2E2] px-6 py-5 flex flex-col gap-1 shadow-lg">
          <div className="text-[#005FDE] text-xs font-bold uppercase tracking-widest mb-2">Navigation</div>
          {mainLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[#0A2F61] font-semibold py-2.5 border-b border-[#E2E2E2] hover:text-[#005FDE] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 flex items-center justify-center gap-2 bg-[#005FDE] text-white px-5 py-3.5 rounded-full font-bold"
            onClick={() => setIsOpen(false)}
          >
            Book Your Free Consultation
          </a>
        </div>
      )}
    </nav>
  )
}
