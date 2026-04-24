import type { Metadata } from 'next'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import { TIMELINE, IMPACT_NUMBERS } from '@/lib/constants'
import CounterUp from '@/components/animations/CounterUp'
import GlowBlob from '@/components/animations/GlowBlob'

export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Conheça a história da Vendemmia: 14 anos integrando cadeias logísticas no Brasil e no mundo.',
}

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        label="Quem Somos"
        title="14 anos conectando"
        titleHighlight="o Brasil ao mundo"
        description="A Vendemmia nasceu em 2011 com uma visão clara: integrar toda a cadeia logística em um único parceiro estratégico, com tecnologia, transparência e resultados mensuráveis."
      />

      {/* Mission */}
      <section className="py-section-md bg-navy-mid">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <h2 className="font-display text-heading-xl text-white mb-6">
                Nosso <span className="text-gradient">propósito</span>
              </h2>
              <p className="text-white/70 text-body-lg leading-relaxed mb-6">
                Somos um operador 4PL — não apenas executamos a logística, nós a integramos e gerenciamos de forma estratégica. Isso significa que atuamos como extensão do time de supply chain dos nossos clientes.
              </p>
              <p className="text-white/70 text-body-md leading-relaxed">
                Nossa tecnologia proprietária, o Analytics by Vendemmia, conecta todos os dados da cadeia em um único painel, permitindo decisões ágeis e baseadas em inteligência real.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {IMPACT_NUMBERS.slice(0, 4).map((item) => (
                  <div key={item.label} className="glass rounded-card p-6 text-center">
                    <div className="font-mono text-3xl font-bold text-gradient mb-1">
                      <CounterUp value={item.value} prefix={item.prefix} suffix={item.suffix} decimals={item.value % 1 !== 0 ? 1 : 0} />
                    </div>
                    <p className="text-white/50 text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-section-lg bg-navy relative overflow-hidden">
        <GlowBlob color="violet" size={500} className="-left-40 top-1/2 opacity-30" />
        <Container className="relative z-10">
          <FadeUp className="mb-12">
            <h2 className="font-display text-heading-xl text-white">
              Nossa <span className="text-gradient">trajetória</span>
            </h2>
          </FadeUp>
          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <FadeUp key={item.year} delay={i * 0.05}>
                <div className="flex gap-6 items-start">
                  <div className="w-16 shrink-0 font-mono text-violet-light font-bold text-sm pt-1">{item.year}</div>
                  <div className="flex-1 glass rounded-xl p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
