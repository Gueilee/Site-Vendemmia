import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import Card from '@/components/ui/Card'
import GlowBlob from '@/components/animations/GlowBlob'

export const metadata: Metadata = {
  title: 'Armazém',
  description: 'Operações de armazenagem com WMS, RFID e ISO 9001. Unidades em SC e SP.',
}

const FEATURES = [
  { icon: '📡', title: 'RFID & WMS', description: 'Rastreabilidade total com tecnologia RFID e sistema WMS de última geração.' },
  { icon: '🏗️', title: 'Infraestrutura Própria', description: 'Unidades em Navegantes (SC), Garuva (SC) e Itapevi (SP) com mais de 50.000 m² no total.' },
  { icon: '✅', title: 'ISO 9001:2015', description: 'Processos certificados com auditoria anual pela Ernst & Young.' },
  { icon: '🚗', title: 'YMS — Yard Management', description: 'Gestão eficiente do pátio, docas e fluxo de veículos.' },
  { icon: '❄️', title: 'Câmaras Frias', description: 'Armazenagem em temperatura controlada para cargas sensíveis.' },
  { icon: '📲', title: 'Integração ERP', description: 'Conectamos com SAP, TOTVS e outros ERPs para visibilidade unificada.' },
]

const STEPS = [
  { number: '01', title: 'Diagnóstico da operação', description: 'Mapeamos seu perfil de armazenagem: SKUs, volumes, sazonalidade e requisitos especiais.' },
  { number: '02', title: 'Layout e parametrização', description: 'Definimos o layout ideal do armazém, endereçamento, picking e fluxos de entrada e saída.' },
  { number: '03', title: 'Integração sistêmica', description: 'Conectamos WMS ao seu ERP para sincronização em tempo real de estoques e movimentações.' },
  { number: '04', title: 'Operação e melhoria contínua', description: 'KPIs em tempo real, relatórios de acuracidade e revisões periódicas de processo.' },
]

const STATS = [
  { value: '99,2%', label: 'Acuracidade de inventário média nas operações certificadas' },
  { value: '50k+', label: 'M² de área armazenável entre as três unidades próprias' },
  { value: 'ISO 9001', label: 'Certificação com auditoria anual Ernst & Young' },
]

const LOCATIONS = [
  { city: 'Navegantes', state: 'SC', detail: 'Próximo ao Porto de Itajaí — ideal para importações' },
  { city: 'Garuva', state: 'SC', detail: 'Zona industrial com acesso rodoviário estratégico' },
  { city: 'Itapevi', state: 'SP', detail: 'Grande São Paulo — distribuição para o maior mercado consumidor' },
]

export default function ArmazenagemPage() {
  return (
    <>
      <PageHero
        label="Armazém 4PL"
        title="Armazenagem inteligente com"
        titleHighlight="tecnologia de ponta"
        description="Estruturas próprias com WMS, RFID e gestão certificada pela ISO 9001. Sua mercadoria segura, rastreada e disponível."
        primaryCta={{ label: 'Falar com especialista', href: '/contato' }}
      />

      {/* Features */}
      <section className="py-section-lg bg-navy relative overflow-hidden">
        <GlowBlob color="violet" size={500} className="-left-40 top-20 opacity-40" />
        <Container className="relative z-10">
          <FadeUp className="mb-12">
            <h2 className="font-display text-heading-xl text-white">
              Tecnologia e <span className="text-gradient">infraestrutura</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08}>
                <Card className="p-6 border-violet/10 hover:border-violet/30 transition-colors">
                  <span className="text-3xl mb-4 block">{f.icon}</span>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-white/60 text-sm">{f.description}</p>
                </Card>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-section-lg bg-navy-mid">
        <Container>
          <FadeUp className="mb-12">
            <h2 className="font-display text-heading-xl text-white">
              Como <span className="text-gradient">funciona</span>
            </h2>
            <p className="text-white/60 mt-3 max-w-xl">Implementação estruturada com zero interrupção na sua operação atual.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="font-mono text-6xl font-bold text-white/5 leading-none mb-4">{step.number}</div>
                  <h3 className="font-display text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="py-section-md bg-navy border-y border-white/5">
        <Container>
          <FadeUp className="mb-10">
            <h2 className="font-display text-heading-lg text-white">
              Nossas <span className="text-gradient">unidades</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, i) => (
              <FadeUp key={loc.city} delay={i * 0.1}>
                <div className="glass rounded-card p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-2xl font-bold text-white">{loc.city}</span>
                    <span className="font-mono text-sm text-violet-light">{loc.state}</span>
                  </div>
                  <p className="text-white/50 text-sm">{loc.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1} className="text-center">
                <div className="font-mono text-4xl font-bold text-gradient mb-2">{s.value}</div>
                <p className="text-white/50 text-sm">{s.label}</p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-navy relative overflow-hidden">
        <GlowBlob color="violet" size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <Container className="relative z-10 text-center">
          <FadeUp>
            <h2 className="font-display text-heading-xl text-white mb-4">
              Sua mercadoria merece a <span className="text-gradient">melhor estrutura</span>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Solicite uma visita às nossas unidades ou fale com nosso time para entender como podemos suportar sua operação.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contato" className="btn-primary">
                Solicitar visita técnica
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/conteudo/cases" className="btn-secondary">Ver casos de armazenagem</Link>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
