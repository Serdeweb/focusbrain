import { ArrowRight, Phone, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden pt-28 pb-16 bg-white">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #005FDE 1.5px, transparent 1.5px)',
          backgroundSize: '38px 38px',
        }}
      />
      {/* Soft color accent */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#005FDE]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-0 w-[350px] h-[350px] bg-[#0ED8FE]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center">
        {/* Left: headline + CTAs */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#EBF5FF] border border-[#005FDE]/30 text-[#005FDE] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#005FDE] rounded-full" />
            Build a Better Brain
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2F61] leading-[1.15] mb-5 tracking-tight">
            Your brain has the power to{' '}
            <span className="text-[#005FDE]">heal, recover and improve.</span>
          </h1>

          <p className="text-base text-[#3D3D3D] mb-8 leading-relaxed">
            Focus Brain Therapy combines neurological assessment, rehabilitation, and enhancement
            through its proprietary{' '}
            <span className="text-[#005FDE] font-semibold">Cognitive Circuit Training® program</span>.
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mb-6">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-[#005FDE] hover:bg-[#0D71F7] text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-xl shadow-[#005FDE]/25 hover:scale-105 active:scale-100"
            >
              Schedule Your Free Evaluation
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:9544244240"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#005FDE] text-[#005FDE] hover:bg-[#005FDE] hover:text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all"
            >
              <Phone size={16} />
              (954) 424-4240
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#67656E]">
            <Shield size={15} className="text-[#005FDE] flex-shrink-0" />
            <span className="text-sm">Medicare &amp; Insurance Accepted</span>
          </div>
        </div>

        {/* Right: video */}
        <div className="relative">
          <div className="absolute -inset-3 bg-[#005FDE]/8 rounded-[2rem] blur-xl pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E2E2E2] aspect-video">
            <iframe
              src="https://www.youtube.com/embed/KezY9l2GSKc?rel=0&modestbranding=1&color=white"
              title="Focus Brain Therapy — Cognitive Circuit Training® Program"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-[#67656E] text-sm">
            <span className="w-1.5 h-1.5 bg-[#005FDE] rounded-full" />
            Watch: The Cognitive Circuit Training® Program in Action
          </div>
        </div>
      </div>
    </section>
  )
}
