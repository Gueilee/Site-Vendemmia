import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import Card from '@/components/ui/Card'
import GlowBlob from '@/components/animations/GlowBlob'

export const metadata: Metadata = {
  title: 'Importação',
  description: 'Gestão 4PL ponta a ponta de importações: BPO, CRO, consultoria tributária e muito mais.',
}

const FEATURES = [
  { icon: '📦', title: 'BPO de Importação', description: 'Terceirização completa do processo de importação, da negociação ao desembaraço.' },
  { icon: '🔬', title: 'CRO — Cargo Release Optimization', description: 'Redução do tempo de liberação de cargas e otimização de custos aduaneiros.' },
  { icon: '📋', title: 'Consultoria Tributária', description: 'Regimes especiais, Drawback, RECOF e oportunidades de incentivos fiscais.' },
  { icon: '🌍', title: 'Gestão de Fornecedores', description: 'Qualificação, auditoria e acompanhamento de fornecedores internacionais.' },
  { icon: '📊', title: 'Visibilidade em Tempo Real', description: 'Rastreamento de embarques e status via Analytics by Vendemmia.' },
  { icon: '🤝', title: 'Despachante Aduaneiro', description: 'Equipe especializada para todos os modais e regimes aduaneiros.' },
]

const STEPS = [
  { number: '01', title: 'Mapeamento da operação', description: 'Analisamos seu perfil de importações, fornecedores, volumes e regimes tributários para identificar oportunidades de otimização.' },
  { number: '02', title: 'Estruturação do processo', description: 'Definimos o fluxo ideal: agenciamento, desembaraço, regimes especiais e integração com seu ERP.' },
  { number: '03', title: 'Operação integrada', description: 'Executamos todo o processo de importação com visibilidade em tempo real via Analytics, do booking ao armazém.' },
  { number: '04', title: 'Inteligência contínua', description: 'Relatórios periódicos, análise de KPIs e identificação de novas oportunidades de redução de custos tributários.' },
]

const STATS = [
  { value: '15%', label: 'Redução média em custos de importação via otimização tributária' },
  { value: '−35%', label: 'No lead time de desembaraço com processo CRO' },
  { value: '100%', label: 'Conformidade fiscal e aduaneira com auditoria interna' },
]

export default function ImportacaoPage() {
  return (
    <>
      <PageHero
        label="Importação 4PL"
        title="Sua importação"
        titleHighlight="gerenciada de ponta a ponta"
        description="BPO de importação completo: desde a negociação com fornecedores até a entrega no armazém, com visibilidade total e conformidade garantida."
        primaryCta={{ label: 'Falar com especialista', href: '/contato' }}
      />

      {/* Features */}
      <section className="py-section-lg bg-navy relative overflow-hidden">
        <GlowBlob color="cyan" size={500} className="-right-40 top-20 opacity-40" />
        <Container className="relative z-10">
          <FadeUp className="mb-12">
            <h2 className="font-display text-heading-xl text-white">
              Serviços de <span className="text-gradient-tech">Importação</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08}>
                <Card className="p-6 border-cyan/10 hover:border-cyan/30 transition-colors">
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
            <p className="text-white/60 mt-3 max-w-xl">Do primeiro contato à operação plena em 4 etapas estruturadas.</p>
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
        <GlowBlob color="violet" size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <Container className="relative z-10 text-center">
          <FadeUp>
            <h2 className="font-display text-heading-xl text-white mb-4">
              Pronto para simplificar <span className="text-gradient">sua importação?</span>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Fale com nossos especialistas em comércio exterior e descubra quanto sua empresa pode economizar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contato" className="btn-primary">
                Solicitar diagnóstico gratuito
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/conteudo/cases" className="btn-secondary">Ver cases de importação</Link>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
