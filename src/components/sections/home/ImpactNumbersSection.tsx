import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import CounterUp from '@/components/animations/CounterUp'
import FadeUp from '@/components/animations/FadeUp'
import { IMPACT_NUMBERS } from '@/lib/constants'

export default function ImpactNumbersSection() {
  return (
    <section className="py-section-lg bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        <FadeUp className="text-center mb-14">
          <SectionLabel className="mb-4">Números que mostram nosso impacto</SectionLabel>
          <h2 className="font-display text-heading-xl text-graphite mt-4">
            Resultados que{' '}
            <span className="text-gradient">comprovam</span>{' '}
            nossa expertise
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {IMPACT_NUMBERS.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.08}>
              <div className="bg-white rounded-card p-5 text-center border border-brand/08 shadow-card hover:shadow-card-hover hover:border-brand/18 transition-all duration-300 group overflow-hidden">
                <div className="font-display font-extrabold text-heading-xl mb-2 leading-none break-words">
                  <span className="text-gradient">
                    <CounterUp
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      decimals={item.value % 1 !== 0 ? 1 : 0}
                    />
                  </span>
                </div>
                <p className="text-label text-graphite/45 uppercase tracking-widest leading-snug mt-1">
                  {item.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-14 divider-brand" />
      </Container>
    </section>
  )
}
