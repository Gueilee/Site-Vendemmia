'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/animations/FadeUp'
import { FOUR_PL_TABS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function WhyFourPLSection() {
  const [activeId, setActiveId] = useState(FOUR_PL_TABS[0].id)
  const active = FOUR_PL_TABS.find((t) => t.id === activeId) ?? FOUR_PL_TABS[0]

  return (
    <section className="py-section-lg bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <FadeUp>
            <SectionLabel className="mb-4">Por que 4PL?</SectionLabel>
            <h2 className="font-display text-heading-xl text-graphite mt-4 mb-3">
              Seu negócio merece ser cuidado pela 4PL que{' '}
              <span className="text-gradient">entende o mercado</span>
            </h2>
            <p className="text-graphite/55 text-body-md mb-8">
              5 motivos para ter controle de gestão integrado com a Vendemmia.
            </p>

            <div className="space-y-2">
              {FOUR_PL_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className={cn(
                    'w-full text-left px-5 py-4 rounded-2xl transition-all duration-250 border text-sm font-semibold',
                    activeId === tab.id
                      ? 'bg-brand/07 border-brand/20 text-brand'
                      : 'border-transparent text-graphite/50 hover:text-graphite hover:bg-cream'
                  )}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/solucoes">Conhecer mais</Button>
            </div>
          </FadeUp>

          {/* ── Right ── */}
          <FadeUp delay={0.15}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-card-lg p-8 relative overflow-hidden border border-brand/08 shadow-card"
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-card-lg"
                  style={{ background: 'linear-gradient(90deg, #422c76, #ff2f69)' }}
                />

                <h3 className="font-display font-bold text-heading-md text-graphite mb-4 pt-2">
                  {active.title}
                </h3>
                <p className="text-graphite/60 text-body-md leading-relaxed">
                  {active.description}
                </p>

                {/* Stat box */}
                <div className="mt-8 p-5 rounded-2xl bg-cream border border-brand/06">
                  <div className="font-display font-extrabold text-display-md text-gradient leading-none">
                    {active.stat.value}
                  </div>
                  <p className="text-graphite/50 text-body-sm mt-2">{active.stat.label}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-5 bg-white rounded-2xl p-4 flex items-center gap-4 border border-mint/20 shadow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center text-xl shrink-0">
                🏆
              </div>
              <div>
                <p className="font-bold text-sm text-graphite">Modelo 4PL reconhecido no mercado</p>
                <p className="text-xs text-graphite/45 mt-0.5">ISO 9001 · SASSMAQ · Ernst & Young Auditado</p>
              </div>
            </motion.div>
          </FadeUp>

        </div>
      </Container>
    </section>
  )
}
