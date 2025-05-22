import { Hero } from '@/components/Hero'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { StylistShowcase } from '@/components/StylistShowcase'
import { LuxuryBrands } from '@/components/LuxuryBrands'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <StylistShowcase />
      <LuxuryBrands />
    </main>
  )
}
