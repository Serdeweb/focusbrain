'use client'

import { useState } from 'react'
import { MapPin, Phone, Globe, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            Start Your Recovery Today
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto">
            Reach out to schedule a consultation or ask us anything. Our team is here to guide you
            every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 rounded-2xl border-2 border-[#005FDE]/20 bg-[#ECFAFF]">
                <CheckCircle size={56} className="text-[#005FDE] mb-4" />
                <h3 className="text-2xl font-black text-[#0A2F61] mb-2">Message Sent!</h3>
                <p className="text-[#67656E]">
                  Thank you for reaching out. A member of our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0A2F61] font-semibold text-sm mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E2E2] focus:border-[#005FDE] focus:outline-none focus:ring-2 focus:ring-[#005FDE]/15 text-[#0A2F61] placeholder:text-[#67656E]/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0A2F61] font-semibold text-sm mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E2E2] focus:border-[#005FDE] focus:outline-none focus:ring-2 focus:ring-[#005FDE]/15 text-[#0A2F61] placeholder:text-[#67656E]/50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#0A2F61] font-semibold text-sm mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(954) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E2E2] focus:border-[#005FDE] focus:outline-none focus:ring-2 focus:ring-[#005FDE]/15 text-[#0A2F61] placeholder:text-[#67656E]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#0A2F61] font-semibold text-sm mb-1.5">
                    How Can We Help You? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your condition or what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E2E2] focus:border-[#005FDE] focus:outline-none focus:ring-2 focus:ring-[#005FDE]/15 text-[#0A2F61] placeholder:text-[#67656E]/50 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#005FDE] hover:bg-[#0D71F7] text-white font-bold py-4 rounded-full text-base transition-all shadow-lg shadow-[#005FDE]/25 hover:scale-[1.02] active:scale-100"
                >
                  Send Message
                </button>
                <p className="text-xs text-[#67656E] text-center">
                  We accept Medicare and most insurance plans. No obligation.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[#0A2F61] rounded-2xl p-8 text-white">
              <h3 className="font-black text-xl mb-6 text-[#0ED8FE]">Our Office</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-[#0ED8FE] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-0.5">Address</div>
                    <div className="text-white/70 text-sm leading-relaxed">
                      10650 W State Rd 84, Suite 208<br />
                      Davie, FL 33324
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={20} className="text-[#0ED8FE] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-0.5">Phone</div>
                    <a
                      href="tel:9544244240"
                      className="text-white/70 text-sm hover:text-[#0ED8FE] transition-colors"
                    >
                      (954) 424-4240
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe size={20} className="text-[#0ED8FE] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white mb-0.5">Website</div>
                    <div className="text-white/70 text-sm">FocusBrainTherapy.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ECFAFF] rounded-2xl p-8 border border-[#005FDE]/15">
              <h3 className="font-black text-[#0A2F61] text-xl mb-4">Insurance</h3>
              <p className="text-[#67656E] text-sm leading-relaxed mb-4">
                We proudly accept <strong className="text-[#005FDE]">Medicare</strong> and most
                major insurance plans. Contact us to verify your coverage before your first visit.
              </p>
              <a
                href="tel:9544244240"
                className="flex items-center justify-center gap-2 bg-[#005FDE] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#0D71F7] transition-colors"
              >
                <Phone size={15} />
                Call to Verify Coverage
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
