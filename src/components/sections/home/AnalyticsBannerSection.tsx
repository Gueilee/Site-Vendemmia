'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/animations/FadeUp'
import GlowBlob from '@/components/animations/GlowBlob'

const FEATURES = [
  { icon: '🌐', title: 'Visibilidade total',      description: 'Acompanhe rotas e processos online, em tempo real e de onde estiver.' },
  { icon: '🤖', title: 'IA & Machine Learning',   description: 'Previsão de demanda, otimização de rotas e alertas inteligentes.' },
  { icon: '📈', title: 'Dashboards estratégicos', description: 'KPIs consolidados de cada etapa da operação em um só lugar.' },
  { icon: '🔗', title: 'Integração total',        description: 'API aberta que conecta ao seu ERP, WMS e sistemas existentes.' },
]

const MINI_STATS = [
  { label: 'Entregas Hoje', value: '847', color: '#01E18E' },
  { label: 'Em Rota',       value: '124', color: '#b9a9e0' },
  { label: 'Atrasos',       value: '3',   color: '#ff6b96' },
]

export default function AnalyticsBannerSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  return (
    <section ref={ref} className="py-section-lg relative overflow-hidden" style={{ background: '#422c76' }}>
      {/* Subtle background texture */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-dots opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)' }} />
      </motion.div>

      {/* Dark blobs */}
      <GlowBlob color="violet"  dark size={700} top="-200px" left="50%"    opacity={0.6} className="-translate-x-1/2" />
      <GlowBlob color="magenta" dark size={500} bottom="-100px" right="0"  opacity={0.5} />

      <Container className="relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <span className="section-label section-label-dark mb-4">Analytics by Vendemmia</span>
          <h2 className="font-display text-heading-xl text-white mt-6 max-w-3xl mx-auto">
            Ganhe tempo e praticidade com a{' '}
            <span className="text-gradient-light">tecnologia que integra tudo</span>{' '}
            que você precisa
          </h2>
          <p className="text-white/55 text-body-lg mt-4 max-w-2xl mx-auto">
            Dados consolidados de forma inteligente, oferecendo os principais indicadores de cada etapa da sua operação.
          </p>
        </FadeUp>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left — Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.08}>
                <div className="glass-dark rounded-card p-6 border border-white/10 hover:bg-white/10 transition-all duration-250 h-full">
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h3 className="font-bold text-white mb-2 text-sm">{f.title}</h3>
                  <p className="text-white/50 text-body-sm leading-relaxed">{f.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Right — Dashboard mockup */}
          <FadeUp delay={0.2}>
            <div
              className="rounded-card-lg p-6 overflow-hidden border border-white/10"
              style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)' }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <span className="text-xs font-mono text-white/30 ml-2">analytics.vendemmia.com.br</span>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl h-36 border border-white/10 relative overflow-hidden mb-4"
                style={{ background: 'rgba(66,44,118,0.5)' }}>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(66,44,118,0.3), rgba(1,225,142,0.05))' }} />
                <div className="absolute top-4 left-8 w-2.5 h-2.5 rounded-full bg-mint/70 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-5 right-10 w-2.5 h-2.5 rounded-full bg-magenta/70 animate-pulse" style={{ animationDelay: '1s' }} />
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 144" fill="none">
                  <path d="M 40 18 Q 200 72 200 72 Q 320 118 360 128"
                    stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
                <div className="absolute bottom-2 right-2 text-xs font-mono text-white/20">Mapa de Rotas</div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {MINI_STATS.map((s) => (
                  <div key={s.label} className="rounded-xl p-3 border border-white/10"
                    style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <p className="text-xs text-white/35 mb-1 truncate">{s.label}</p>
                    <p className="font-mono font-bold text-white text-lg leading-none">{s.value}</p>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: s.color }} />
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/35">Performance Mensal</span>
                  <span className="text-xs font-mono text-mint">94%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.10)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #422c76, #01E18E)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '94%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* CTA */}
        <FadeUp delay={0.3} className="text-center mt-14">
          <a
            href="/solucoes/analytics"
            className="inline-flex items-center gap-2 font-bold text-brand rounded-full px-8 py-4 text-base transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'white',
              boxShadow: '0 8px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            Conhecer a plataforma
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm text-white/45 mt-4">Acesso disponível para clientes Vendemmia</p>
        </FadeUp>
      </Container>
    </section>
  )
}
