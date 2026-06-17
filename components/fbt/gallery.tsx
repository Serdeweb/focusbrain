import Image from 'next/image'

const images = [
  {
    src: '/brain/larger%20space%20RCCC%20training%20studio%20(1).jpg',
    alt: 'Focus Brain Therapy CCT training studio',
    span: 'lg:col-span-2 lg:row-span-2',
    height: 'h-72 lg:h-full',
  },
  {
    src: '/brain/Main%20room.jpeg',
    alt: 'Focus Brain Therapy main training room',
    span: '',
    height: 'h-56',
  },
  {
    src: '/today/Replacement%20of%20Brown%20Image%20v2.0.JPG',
    alt: 'Focus Brain Therapy training area',
    span: '',
    height: 'h-56',
  },
  {
    src: '/today/Bottom%20image%20-%20Green%20Room.JPG',
    alt: 'Focus Brain Therapy green room',
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
            Our Facility &amp; Results
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0A2F61] leading-tight mb-6">
            Where Recovery Happens
          </h2>
          <p className="text-[#67656E] text-lg max-w-2xl mx-auto">
            Our Davie, FL facility features cutting-edge CCT equipment and technology, staffed by
            specialists dedicated to your neurological recovery and brain health.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 mb-12">
          {images.map(({ src, alt, span, height }) => (
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
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="flex items-center justify-center bg-[#ECFAFF] rounded-2xl px-8 py-8 border border-[#005FDE]/15">
          <div className="font-black text-[#0A2F61] text-xl text-center">
            Build a better brain to build a better life.
          </div>
        </div>
      </div>
    </section>
  )
}
