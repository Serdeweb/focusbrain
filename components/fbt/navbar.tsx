'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Our Mission', href: '#about' },
  { label: 'What We Do', href: '#services' },
  { label: 'Who We Help', href: '#who-we-help' },
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
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
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[#67656E] hover:text-[#005FDE] font-medium text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="tel:9544244240"
            className="hidden md:flex items-center gap-2 bg-[#005FDE] hover:bg-[#0D71F7] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-[#005FDE]/25"
          >
            <Phone size={15} />
            (954) 424-4240
          </a>

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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E2E2] px-6 py-5 flex flex-col gap-1 shadow-lg">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[#67656E] font-medium py-3 border-b border-[#E2E2E2] last:border-0 hover:text-[#005FDE] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:9544244240"
            className="mt-3 flex items-center justify-center gap-2 bg-[#005FDE] text-white px-5 py-3.5 rounded-full font-bold"
          >
            <Phone size={17} />
            (954) 424-4240
          </a>
        </div>
      )}
    </nav>
  )
}
