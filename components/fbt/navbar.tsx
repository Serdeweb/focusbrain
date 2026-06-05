'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const topLinks = [
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Resources', href: '#resources' },
  { label: 'Podcasts', href: '#podcasts' },
  { label: 'Events', href: '#events' },
]

const mainLinks = [
  { label: 'Our Mission', href: '#about' },
  { label: 'What We Do', href: '#services' },
  { label: 'How We Help', href: '#how-we-help' },
  { label: 'Our Team', href: '#team' },
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
      {/* Top utility bar */}
      <div className="bg-[#0A2F61] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            {topLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-white/70 hover:text-[#0ED8FE] text-xs font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="tel:9544244240"
            className="flex items-center gap-1.5 text-[#0ED8FE] text-xs font-semibold hover:text-white transition-colors"
          >
            <Phone size={12} />
            (954) 424-4240
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div className={`bg-white/97 backdrop-blur-sm ${scrolled ? '' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <a href="#" className="flex items-center flex-shrink-0">
              <Image
                src="/Focus-Brain-Therapy-Logo.avif"
                alt="Focus Brain Therapy"
                width={160}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {mainLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[#67656E] hover:text-[#005FDE] font-medium text-sm transition-colors whitespace-nowrap"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA + ADA */}
            <div className="hidden md:flex items-center gap-3">
              {/* ADA Accessibility Icon */}
              <a
                href="#"
                aria-label="Accessibility options"
                title="Accessibility options (ADA)"
                className="w-9 h-9 rounded-full bg-[#005FDE] flex items-center justify-center hover:bg-[#0A2F61] transition-colors flex-shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
                  <circle cx="12" cy="4" r="2" />
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" opacity="0"/>
                  <path d="M19.07 4.93l-1.41 1.41C16.1 4.78 14.15 4 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c4.08 0 7.44-3.05 7.93-7h-2.02c-.46 2.84-2.96 5-5.91 5-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L14 11h6V5l-0.93-.07z" opacity="0"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" opacity="0"/>
                  <path d="M12 2a2 2 0 100 4 2 2 0 000-4zM10 8.5v2.17l2 .67 2-.67V8.5c-.65.32-1.31.5-2 .5s-1.35-.18-2-.5zM6 9l1.5 4.5L9 12l1 4h4l1-4 1.5 1.5L18 9l-3 1-1-1.5c-.3.17-.63.27-1 .3V9h-2v-.2c-.37-.03-.7-.13-1-.3L6 9z"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-[#005FDE] hover:bg-[#0D71F7] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-[#005FDE]/25 whitespace-nowrap"
              >
                Book a Consultation
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#ECFAFF] transition-colors"
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
              className="text-[#67656E] font-medium py-2.5 border-b border-[#E2E2E2] hover:text-[#005FDE] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="text-[#005FDE] text-xs font-bold uppercase tracking-widest mt-4 mb-2">More</div>
          {topLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[#67656E] font-medium py-2.5 border-b border-[#E2E2E2] last:border-0 hover:text-[#005FDE] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:9544244240"
            className="mt-4 flex items-center justify-center gap-2 bg-[#005FDE] text-white px-5 py-3.5 rounded-full font-bold"
          >
            <Phone size={17} />
            (954) 424-4240
          </a>
        </div>
      )}
    </nav>
  )
}
