import { ArrowRight, Phone, Shield, DollarSign } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 bg-[#EEF4FB]">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #005FDE 1.5px, transparent 1.5px)',
          backgroundSize: '38px 38px',
        }}
      />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#005FDE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-0 w-[350px] h-[350px] bg-[#0ED8FE]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

        {/* Top grid: text left, video right */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center mb-10">

          {/* Left */}
          <div>
            {/* Logo — large and prominent */}
            <div className="mb-6">
              <Image
                src="/brain/Logo_FBT.png"
                alt="Focus Brain Therapy"
                width={360}
                height={120}
                className="h-36 w-auto object-contain"
                priority
              />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2F61] leading-[1.15] mb-5 tracking-tight">
              Your brain has the power to{' '}
              <span className="text-[#005FDE]">heal, recover and improve.</span>
            </h1>

            <p className="text-base text-[#3D3D3D] mb-6 leading-relaxed">
              Focus Brain Therapy combines neurological assessment, rehabilitation, and enhancement
              through its proprietary{' '}
              <span className="text-[#005FDE] font-semibold">Cognitive Circuit Training® program</span>.
            </p>

            {/* Badges — moved here where buttons were */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center gap-2 bg-[#EBF5FF] border border-[#005FDE]/30 text-[#005FDE] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                <span className="w-2 h-2 bg-[#005FDE] rounded-full" />
                Build a Better Brain
              </div>
              <div className="inline-flex items-center gap-2 bg-[#EBF5FF] border border-[#005FDE]/30 text-[#005FDE] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                <span className="w-2 h-2 bg-[#005FDE] rounded-full" />
                Build a Better Life
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-[#67656E]">
              <div className="flex items-center gap-2">
                <Shield size={15} className="text-[#005FDE] flex-shrink-0" />
                <span className="text-sm">Medicare and PPO Insurance accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={15} className="text-[#005FDE] flex-shrink-0" />
                <span className="text-sm">Financing available</span>
              </div>
            </div>
          </div>

          {/* Right: video + buttons below */}
          <div className="relative flex flex-col gap-4">
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

            {/* Buttons below the video */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="flex-1 flex items-center justify-center gap-2 bg-[#005FDE] hover:bg-[#0D71F7] text-white px-6 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-[#005FDE]/25 hover:scale-[1.02] active:scale-100"
              >
                Schedule Your Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:9544244240"
                className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-[#005FDE] text-[#005FDE] hover:bg-[#005FDE] hover:text-white px-6 py-4 rounded-full font-bold text-base transition-all whitespace-nowrap"
              >
                <Phone size={18} />
                (954) 424-4240
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
