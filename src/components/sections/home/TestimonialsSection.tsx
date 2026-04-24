import Link from 'next/link'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import GlowBlob from '@/components/animations/GlowBlob'
import TestimonialsCarousel from '@/components/sections/shared/TestimonialsCarousel'

export default function TestimonialsSection() {
  return (
    <section className="py-section-lg relative overflow-hidden" style={{ background: '#2d1e52' }}>
      <GlowBlob color="violet"  dark size={600} top="0"      right="-80px"  opacity={0.7} />
      <GlowBlob color="magenta" dark size={400} bottom="0"   left="-80px"   opacity={0.5} />

      <Container className="relative z-10">
        <FadeUp className="text-center mb-14">
          <span className="section-label section-label-dark mb-4">Depoimentos</span>
          <h2 className="font-display text-heading-xl text-white mt-6">
            Conheça alguns dos nossos{' '}
            <span className="text-gradient-light">parceiros e clientes</span>
          </h2>
          <p className="text-white/50 text-body-md mt-4 max-w-lg mx-auto">
            Quem confia, recomenda. Quem tem Vendemmia, conta com logística, tecnologia e expertise.
          </p>
        </FadeUp>

        <TestimonialsCarousel dark />

        <FadeUp delay={0.2} className="text-center mt-10">
          <Link
            href="/conteudo/cases"
            className="text-white/50 hover:text-white transition-colors text-sm font-semibold"
          >
            Ver todos os cases →
          </Link>
        </FadeUp>
      </Container>
    </section>
  )
}
