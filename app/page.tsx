import Navbar from '@/components/fbt/navbar'
import Hero from '@/components/fbt/hero'
import WhatWeDo from '@/components/fbt/what-we-do'
import WhoWeHelp from '@/components/fbt/who-we-help'
import WhatToExpect from '@/components/fbt/what-to-expect'
import Providers from '@/components/fbt/providers'
import WhyChooseUs from '@/components/fbt/why-choose-us'
import Gallery from '@/components/fbt/gallery'
import Contact from '@/components/fbt/contact'
import Footer from '@/components/fbt/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <WhoWeHelp />
        <WhatToExpect />
        <Providers />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
