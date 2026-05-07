import Image from 'next/image'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85&auto=format&fit=crop',
    alt: 'Neurologist reviewing brain scan results',
    caption: 'Advanced Neurological Diagnostics',
    span: 'lg:col-span-2 lg:row-span-2',
    height: 'h-72 lg:h-full',
  },
  {
    src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=85&auto=format&fit=crop',
    alt: 'Doctor consulting with elderly patient',
    caption: 'Compassionate Patient Care',
    span: '',
    height: 'h-56',
  },
  {
    src: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=700&q=85&auto=format&fit=crop',
    alt: 'Active healthy seniors',
    caption: 'Life After Recovery',
    span: '',
    height: 'h-56',
  },
  {
    src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=85&auto=format&fit=crop',
    alt: 'Senior couple living actively',
    caption: 'Restored Independence & Confidence',
    span: 'lg:col-span-2',
    height: 'h-56',
  },
]

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-[#005FDE] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Our Facility & Results
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            Where Recovery Happens
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto">
            Our Davie, FL facility is equipped with cutting-edge technology and staffed by specialists
            dedicated to your neurological recovery and brain health.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 mb-12">
          {images.map(({ src, alt, caption, span, height }) => (
            <div
              key={alt}
              className={`relative rounded-2xl overflow-hidden group cursor-default ${span} ${height} min-h-56`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F61]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-semibold text-sm drop-shadow">{caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#ECFAFF] rounded-2xl px-8 py-6 border border-[#005FDE]/15">
          <div>
            <div className="font-black text-[#0A2F61] text-xl mb-1">
              Ready to start your recovery journey?
            </div>
            <div className="text-[#67656E] text-sm">
              Same-week appointments available. Medicare & insurance accepted.
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-[#005FDE] hover:bg-[#0D71F7] text-white px-7 py-3.5 rounded-full font-bold transition-colors shadow-md shadow-[#005FDE]/20"
          >
            Book Your Evaluation
          </a>
        </div>
      </div>
    </section>
  )
}
