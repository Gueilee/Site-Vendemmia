'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/animations/FadeUp'
import { SOLUTIONS } from '@/lib/constants'

const COLOR_MAP: Record<string, {
  bg: string; glow: string; text: string; border: string; iconBg: string
}> = {
  cyan:    { bg: 'rgba(1,225,142,0.05)',   glow: '0 8px 40px rgba(1,225,142,0.15)',    text: '#00b570', border: 'rgba(1,225,142,0.2)',    iconBg: 'rgba(1,225,142,0.10)'    },
  violet:  { bg: 'rgba(66,44,118,0.04)',   glow: '0 8px 40px rgba(66,44,118,0.14)',    text: '#422c76', border: 'rgba(66,44,118,0.18)',    iconBg: 'rgba(66,44,118,0.08)'    },
  magenta: { bg: 'rgba(255,47,105,0.04)',  glow: '0 8px 40px rgba(255,47,105,0.14)',   text: '#cc0044', border: 'rgba(255,47,105,0.18)',   iconBg: 'rgba(255,47,105,0.08)'   },
  green:   { bg: 'rgba(1,225,142,0.05)',   glow: '0 8px 40px rgba(1,225,142,0.15)',    text: '#00b570', border: 'rgba(1,225,142,0.2)',    iconBg: 'rgba(1,225,142,0.10)'    },
}

const SOLUTION_IMAGES: Record<string, string> = {
  importacao:  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=640&h=220&fit=crop&q=80',
  armazenagem: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=640&h=220&fit=crop&q=80',
  transportes: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=640&h=220&fit=crop&q=80',
  analytics:   'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=220&fit=crop&q=80',
}

function SolutionCard({ solution }: { solution: typeof SOLUTIONS[0] }) {
  const [hovered, setHovered] = useState(false)
  const colors = COLOR_MAP[solution.color] ?? COLOR_MAP.violet
  const img = SOLUTION_IMAGES[solution.id]

  return (
    <Link href={solution.href} className="block h-full">
      <motion.div
        className="bg-white rounded-card h-full overflow-hidden relative border cursor-pointer flex flex-col"
        animate={{
          boxShadow: hovered ? colors.glow : '0 2px 16px rgba(66,44,118,0.06)',
          borderColor: hovered ? colors.border : 'rgba(66,44,118,0.08)',
          backgroundColor: hovered ? colors.bg : '#ffffff',
        }}
        transition={{ duration: 0.25 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Photo header */}
        {img && (
          <div className="relative h-44 overflow-hidden shrink-0">
            <img
              src={img}
              alt={solution.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/95" />
            {/* Icon badge */}
            <div
              className="absolute bottom-3 left-5 w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-card"
              style={{ background: colors.iconBg, border: `1px solid ${colors.border}`, backdropFilter: 'blur(8px)' }}
            >
              {solution.icon}
            </div>
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-heading-sm text-graphite mb-2">{solution.title}</h3>
          <p className="text-graphite/55 text-body-md leading-relaxed mb-5 flex-1">{solution.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {solution.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{ border: `1px solid ${colors.border}`, color: colors.text, background: colors.iconBg }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-1.5" style={{ color: colors.text }}>
            <span className="text-sm font-bold">Conhecer melhor</span>
            <motion.span animate={{ x: hovered ? 5 : 0 }} transition={{ duration: 0.2 }}>→</motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function SolutionsSection() {
  return (
    <section className="pt-section-md pb-section-lg bg-cream relative overflow-hidden">
      <Container>
        <FadeUp className="text-center mb-14">
          <SectionLabel className="mb-4">Nossas Soluções</SectionLabel>
          <h2 className="font-display text-heading-xl text-graphite mt-4">
            Para cada necessidade,{' '}
            <span className="text-gradient">uma solução ideal</span>
          </h2>
          <p className="text-graphite/55 text-body-lg mt-4 max-w-2xl mx-auto">
            Tecnologia e expertise integradas para cada etapa da sua cadeia logística.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SOLUTIONS.map((solution, i) => (
            <FadeUp key={solution.id} delay={i * 0.08}>
              <SolutionCard solution={solution} />
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="text-center mt-10">
          <Button variant="secondary" href="/solucoes">
            Ver todas as soluções
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </FadeUp>
      </Container>
    </section>
  )
}
