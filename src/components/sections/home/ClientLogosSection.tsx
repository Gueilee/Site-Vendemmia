import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/animations/FadeUp'
import { CLIENT_LOGOS } from '@/lib/constants'

export default function ClientLogosSection() {
  const triple = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <section className="py-section-md bg-cream overflow-hidden">
      <Container>
        <FadeUp className="text-center mb-12">
          <SectionLabel className="mb-4">Clientes que confiam na Vendemmia</SectionLabel>
          <h2 className="font-display text-heading-lg text-graphite mt-4">
            Quem tem Vendemmia, conta com{' '}
            <span className="text-gradient">logística, tecnologia e expertise</span>
          </h2>
        </FadeUp>
      </Container>

      {/* Ticker 1 → */}
      <div className="relative mb-3 overflow-hidden">
        <div className="flex gap-12 w-max animate-ticker py-3">
          {triple.map((client, i) => (
            <LogoItem key={`a-${i}`} name={client.name} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-cream to-transparent" />
      </div>

      {/* Ticker 2 ← */}
      <div className="relative overflow-hidden">
        <div className="flex gap-12 w-max animate-ticker-rev py-3">
          {triple.map((client, i) => (
            <LogoItem key={`b-${i}`} name={client.name} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-cream to-transparent" />
      </div>

      <Container>
        <FadeUp delay={0.2} className="text-center mt-8">
          <p className="text-body-sm text-graphite/35">
            Empresas líderes que transformaram sua logística com a Vendemmia
          </p>
        </FadeUp>
      </Container>
    </section>
  )
}

function LogoItem({ name }: { name: string }) {
  return (
    <div className="shrink-0 flex items-center justify-center w-36 h-10 opacity-30 hover:opacity-70 transition-all duration-300">
      <span className="text-graphite font-display font-bold text-sm tracking-wider uppercase">{name}</span>
    </div>
  )
}
