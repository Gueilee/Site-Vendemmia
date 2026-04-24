'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/animations/FadeUp'

const STEPS = [
  {
    icon: '🚢',
    title: 'Importação sob controle',
    color: '#422c76',
    highlight: { value: 'R$2,4B+', label: 'movimentados/ano' },
    description:
      'Acompanhe cada etapa do processo de importação em tempo real. Do embarque no exterior até o desembaraço aduaneiro, com total previsibilidade e zero surpresas.',
  },
  {
    icon: '🏭',
    title: 'Armazém inteligente',
    color: '#ff2f69',
    highlight: { value: '+50mil m²', label: 'de área própria' },
    description:
      'Tecnologia RFID, WMS próprio e estruturas certificadas ISO 9001. Seu estoque monitorado por câmeras, sensores e sistemas integrados 24h por dia.',
  },
  {
    icon: '🚛',
    title: 'Transporte rastreado',
    color: '#01E18E',
    highlight: { value: '50K+', label: 'CTEs/ano' },
    description:
      'Frota própria e parceiros homologados com TMS integrado. Rotas otimizadas por IA, rastreamento em tempo real e app exclusivo para motoristas.',
  },
  {
    icon: '📊',
    title: 'Dados que decidem',
    color: '#422c76',
    highlight: { value: '100%', label: 'visibilidade end-to-end' },
    description:
      'O Analytics by Vendemmia consolida todos os dados da sua operação em dashboards inteligentes. Tome decisões baseadas em fatos, não em suposições.',
  },
]

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  return (
    <FadeUp delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -3, boxShadow: '0 16px 48px rgba(66,44,118,0.15)' }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-card p-5 md:p-6 flex items-center gap-5 border border-brand/08 shadow-card"
      >
        {/* Step number + icon */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <span
            className="text-xs font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center"
            style={{ color: step.color, background: `${step.color}15` }}
          >
            {index + 1}
          </span>
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: `${step.color}15`, border: `1px solid ${step.color}35` }}
          >
            {step.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-heading-sm text-graphite mb-1.5">{step.title}</h3>
          <p className="text-graphite/60 text-body-sm leading-relaxed">{step.description}</p>
        </div>

        {/* Highlight */}
        <div
          className="hidden lg:flex flex-col items-end shrink-0 pl-5 ml-2"
          style={{ borderLeft: `1px solid ${step.color}30` }}
        >
          <span
            className="font-display font-extrabold text-heading-md leading-none"
            style={{
              background: `linear-gradient(135deg, ${step.color}, ${step.color}bb)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {step.highlight.value}
          </span>
          <span className="text-label text-graphite/45 uppercase tracking-widest mt-1.5 text-right">
            {step.highlight.label}
          </span>
        </div>
      </motion.div>
    </FadeUp>
  )
}

function ProgressLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-brand/08 z-0">
      <motion.div
        className="w-full origin-top"
        style={{ height, background: 'linear-gradient(to bottom, #422c76, #ff2f69)' }}
      />
    </div>
  )
}

export default function ScrollStorySection() {
  return (
    <section className="py-section-lg bg-white relative overflow-hidden">
      <Container>
        <FadeUp className="text-center mb-12">
          <SectionLabel className="mb-4">Como funciona</SectionLabel>
          <h2 className="font-display text-heading-xl text-graphite mt-4">
            A jornada completa do seu{' '}
            <span className="text-gradient">produto</span>
          </h2>
          <p className="text-graphite/55 text-body-lg mt-4 max-w-xl mx-auto">
            Da origem ao destino, gerenciamos cada etapa com tecnologia, dados e expertise 4PL.
          </p>
        </FadeUp>

        <div className="relative max-w-4xl mx-auto">
          <ProgressLine />

          {/* Step dots */}
          <div className="hidden md:block">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="absolute left-8 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white z-10"
                style={{
                  top: `${(i / STEPS.length) * 100 + 100 / STEPS.length / 2}%`,
                  background: step.color,
                  boxShadow: `0 0 8px ${step.color}60`,
                }}
              />
            ))}
          </div>

          <div className="space-y-4 md:pl-20">
            {STEPS.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
