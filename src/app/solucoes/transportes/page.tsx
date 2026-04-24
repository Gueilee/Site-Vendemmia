import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import Card from '@/components/ui/Card'
import GlowBlob from '@/components/animations/GlowBlob'

export const metadata: Metadata = {
  title: 'Transportes',
  description: 'TMS, rastreamento em tempo real, frota dedicada e App do Motorista.',
}

const FEATURES = [
  { icon: '🗺️', title: 'TMS Inteligente', description: 'Sistema de Gestão de Transportes com roteirização otimizada e controle de custos por rota.' },
  { icon: '📍', title: 'Rastreamento Real-time', description: 'Localização de veículos em tempo real integrada ao Analytics by Vendemmia.' },
  { icon: '📱', title: 'App do Motorista', description: 'Aplicativo para motoristas com roteirização, registro de ocorrências e comunicação direta.' },
  { icon: '🚛', title: 'Frota Modernizada', description: 'Frota própria renovada com veículos equipados com tecnologia SASSMAQ certificada.' },
  { icon: '📊', title: 'Torre de Controle', description: 'Monitoramento centralizado de todas as operações com alertas automáticos e dashboards.' },
  { icon: '♻️', title: 'Logística Reversa', description: 'Gestão completa do fluxo reverso de mercadorias, embalagens e devoluções.' },
]

const STEPS = [
  { number: '01', title: 'Mapeamento de rotas', description: 'Analisamos origem, destino, volumes, janelas de entrega e SLAs para construir o modelo de distribuição ideal.' },
  { number: '02', title: 'Seleção de modal e frota', description: 'Definimos a combinação de frota própria e transportadoras parceiras para máxima eficiência de custo.' },
  { number: '03', title: 'Integração com TMS', description: 'Conectamos seu sistema de pedidos ao TMS para automação de romaneios, CTE e acompanhamento.' },
  { number: '04', title: 'Gestão por KPIs', description: 'On-time delivery, OTIF, custo por km e avaria — indicadores em tempo real para melhoria contínua.' },
]

const STATS = [
  { value: '89%', label: 'Taxa média de on-time delivery nas operações gerenciadas' },
  { value: '<0,1%', label: 'Índice de avaria em transporte com frota certificada SASSMAQ' },
  { value: 'Nacional', label: 'Cobertura de transporte em todo o território brasileiro' },
]

export default function TransportesPage() {
  return (
    <>
      <PageHero
        label="Transportes 4PL"
        title="Transporte inteligente com"
        titleHighlight="rastreamento total"
        description="TMS avançado, frota própria e app do motorista para máxima eficiência e visibilidade em cada entrega."
        primaryCta={{ label: 'Falar com especialista', href: '/contato' }}
      />

      {/* Features */}
      <section className="py-section-lg bg-navy relative overflow-hidden">
        <GlowBlob color="magenta" size={500} className="-right-40 top-20 opacity-40" />
        <Container className="relative z-10">
          <FadeUp className="mb-12">
            <h2 className="font-display text-heading-xl text-white">
              Gestão <span className="text-gradient">inteligente</span> de transportes
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08}>
                <Card className="p-6 border-magenta/10 hover:border-magenta/30 transition-colors">
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
            <p className="text-white/60 mt-3 max-w-xl">Da análise de rotas à entrega com rastreamento em tempo real.</p>
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

      {/* Stats */}
      <section className="py-section-md bg-navy border-y border-white/5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <GlowBlob color="magenta" size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />
        <Container className="relative z-10 text-center">
          <FadeUp>
            <h2 className="font-display text-heading-xl text-white mb-4">
              Cada entrega no prazo, <span className="text-gradient">toda vez</span>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Fale com nossos especialistas em transportes e descubra como melhorar seu índice de on-time delivery.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contato" className="btn-primary">
                Otimizar minha distribuição
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/solucoes/analytics" className="btn-secondary">Ver Analytics de transporte</Link>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
