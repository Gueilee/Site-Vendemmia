import type { Metadata } from 'next'
import HeroSection from '@/components/sections/home/HeroSection'
import ScrollStorySection from '@/components/sections/home/ScrollStorySection'
import SolutionsSection from '@/components/sections/home/SolutionsSection'
import WhyFourPLSection from '@/components/sections/home/WhyFourPLSection'
import AnalyticsBannerSection from '@/components/sections/home/AnalyticsBannerSection'
import ImpactNumbersSection from '@/components/sections/home/ImpactNumbersSection'
import VideosSection from '@/components/sections/home/VideosSection'
import ClientLogosSection from '@/components/sections/home/ClientLogosSection'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import HomeCTASection from '@/components/sections/home/HomeCTASection'

export const metadata: Metadata = {
  title: 'Vendemmia — Logística 4PL Inteligente',
  description:
    'Integração completa da cadeia logística: importação, armazém, transportes e analytics em uma plataforma única.',
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ScrollStorySection />
      <SolutionsSection />
      <WhyFourPLSection />
      <AnalyticsBannerSection />
      <ImpactNumbersSection />
      <VideosSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <HomeCTASection />
    </main>
  )
}
