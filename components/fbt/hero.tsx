import { ArrowRight, Phone, Shield, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28">
      {/* Background Photo */}
      <Image
        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=85&auto=format&fit=crop"
        alt="Brain neural network"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A2F61]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2F61]/60 via-transparent to-transparent" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0ED8FE 1.5px, transparent 1.5px)',
          backgroundSize: '38px 38px',
        }}
      />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#005FDE]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] bg-[#0ED8FE]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center">
        {/* Left: headline + CTAs */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#0ED8FE]/15 border border-[#0ED8FE]/40 text-[#0ED8FE] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#0ED8FE] rounded-full animate-pulse" />
            South Florida's First Personalized Brain Therapy
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-5 tracking-tight">
            Your Brain Has the Power to{' '}
            <span className="text-[#0ED8FE]">Recover.</span>
          </h1>

          <p className="text-base text-white/75 mb-8 leading-relaxed">
            Focus Brain Therapy specializes in targeted neurological assessment, diagnosis, and
            rehabilitation — helping patients reclaim their focus, balance, and independence through
            our proprietary{' '}
            <span className="text-[#0ED8FE] font-semibold">Cognitive Circuit Training® Program</span>.
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mb-6">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#005FDE] hover:bg-[#0D71F7] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-xl shadow-[#005FDE]/30 hover:scale-105 active:scale-100"
            >
              Schedule Your Evaluation
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:9544244240"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#0ED8FE] text-[#0ED8FE] hover:bg-[#0ED8FE] hover:text-[#0A2F61] px-6 py-3.5 rounded-full font-bold text-sm transition-all"
            >
              <Phone size={16} />
              (954) 424-4240
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white/60">
              <Shield size={14} className="text-[#0ED8FE] flex-shrink-0" />
              <span className="text-xs">Medicare & Insurance Accepted</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <CheckCircle size={14} className="text-[#0ED8FE] flex-shrink-0" />
              <span className="text-xs">Board-Certified Neurologists</span>
            </div>
          </div>
        </div>

        {/* Right: video — larger than the text column */}
        <div className="relative">
          <div className="absolute -inset-3 bg-[#0ED8FE]/12 rounded-[2rem] blur-xl pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/KezY9l2GSKc?rel=0&modestbranding=1&color=white"
              title="Focus Brain Therapy — Cognitive Circuit Training® Program"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-white/50 text-xs">
            <span className="w-1.5 h-1.5 bg-[#0ED8FE] rounded-full" />
            Watch: The Cognitive Circuit Training® Program in Action
          </div>
        </div>
      </div>
    </section>
  )
}
