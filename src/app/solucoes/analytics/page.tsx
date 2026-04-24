import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import Card from '@/components/ui/Card'
import GlowBlob from '@/components/animations/GlowBlob'

export const metadata: Metadata = {
  title: 'Analytics by Vendemmia',
  description: 'Plataforma de analytics logístico com IA, dashboards em tempo real e visibilidade ponta a ponta.',
}

const FEATURES = [
  { icon: '📊', title: 'Dashboards em Tempo Real', description: 'Painéis personalizáveis com KPIs de toda a operação logística — do armazém à última milha.' },
  { icon: '🤖', title: 'IA Preditiva', description: 'Machine Learning para previsão de demanda, antecipação de atrasos e otimização de rotas.' },
  { icon: '🔔', title: 'Alertas Automáticos', description: 'Notificações inteligentes baseadas em regras de negócio configuráveis para cada operação.' },
  { icon: '🔗', title: 'Integração API', description: 'Conecte com ERP, WMS, TMS e sistemas legados via API REST. SAP, TOTVS, Oracle e outros.' },
  { icon: '📱', title: 'Acesso Multiplataforma', description: 'Web, mobile e app nativo. Sua operação na palma da mão, em qualquer dispositivo.' },
  { icon: '🔒', title: 'Segurança de Dados', description: 'Criptografia end-to-end, autenticação multifator e conformidade total com a LGPD.' },
]

const STEPS = [
  { number: '01', title: 'Mapeamento de dados', description: 'Identificamos todas as fontes de dados da sua operação: ERP, WMS, transportadoras, portais aduaneiros.' },
  { number: '02', title: 'Integração via API', description: 'Conectamos os sistemas existentes sem substituição — o Analytics centraliza os dados, não os fragmenta.' },
  { number: '03', title: 'Configuração de dashboards', description: 'Criamos painéis personalizados com os KPIs mais relevantes para seu negócio e sua equipe.' },
  { number: '04', title: 'Alertas e automação', description: 'Definimos regras de negócio para notificações proativas — você é avisado antes do problema virar crise.' },
]

const STATS = [
  { value: '30%', label: 'Redução no tempo dedicado a relatórios manuais' },
  { value: '+20%', label: 'Capacidade de resposta a imprevistos com alertas preditivos' },
  { value: '100%', label: 'Visibilidade da cadeia em um único painel integrado' },
]

const INTEGRATIONS = ['SAP', 'TOTVS', 'Oracle', 'Siscomex', 'Correios', 'Comau', 'ERP próprio', 'API custom']

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        label="Analytics by Vendemmia"
        title="Visibilidade logística em"
        titleHighlight="tempo real"
        description="Nossa plataforma exclusiva transforma dados da cadeia logística em decisões inteligentes — do armazém à última milha."
        primaryCta={{ label: 'Agendar demo gratuita', href: '/contato' }}
        secondaryCta={{ label: 'Ver funcionalidades', href: '#funcionalidades' }}
      />

      {/* Features */}
      <section id="funcionalidades" className="py-section-lg bg-navy relative overflow-hidden">
        <GlowBlob color="cyan" size={600} className="-right-40 top-0 opacity-40" />
        <GlowBlob color="violet" size={400} className="-left-40 bottom-0 opacity-30" />
        <Container className="relative z-10">
          <FadeUp className="mb-12">
            <h2 className="font-display text-heading-xl text-white">
              Funcionalidades do <span className="text-gradient-tech">Analytics</span>
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
            <p className="text-white/60 mt-3 max-w-xl">Implementação em semanas, resultados em dias. Sem substituir seus sistemas atuais.</p>
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

      {/* Integrations */}
      <section className="py-section-md bg-navy-mid">
        <Container>
          <FadeUp className="mb-8">
            <h2 className="font-display text-heading-lg text-white">
              Integrações <span className="text-gradient-tech">suportadas</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {INTEGRATIONS.map((name) => (
                <span key={name} className="glass px-4 py-2 rounded-full text-sm font-mono text-white/60 border border-white/10">
                  {name}
                </span>
              ))}
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-navy relative overflow-hidden">
        <GlowBlob color="cyan" size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <Container className="relative z-10 text-center">
          <FadeUp>
            <h2 className="font-display text-heading-xl text-white mb-4">
              Veja o Analytics em <span className="text-gradient-tech">ação</span>
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Agende uma demo gratuita com nosso time e veja como seus dados logísticos se transformam em inteligência operacional.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contato" className="btn-primary">
                Agendar demo gratuita
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://analytics.vendemmia.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Acessar plataforma
              </a>
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
