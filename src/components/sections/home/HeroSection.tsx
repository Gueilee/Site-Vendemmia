'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import GlowBlob from '@/components/animations/GlowBlob'

const STATS = [
  { value: '+14 anos', label: 'de experiência' },
  { value: 'R$2,4B+',  label: 'volume anual' },
  { value: '+200',     label: 'clientes ativos' },
]

const METRICS = [
  { label: 'Embarques Ativos',  value: '1.284', delta: '+12%', positive: true },
  { label: 'No Prazo',          value: '98,3%', delta: '+0,4%', positive: true },
  { label: 'Em Trânsito (t)',   value: '4.720', delta: '+5%',   positive: true },
  { label: 'Alertas',           value: '3',     delta: '−8',    positive: false },
]

const BAR_HEIGHTS = [55, 70, 50, 85, 65, 90, 100]

const ease = [0.22, 1, 0.36, 1] as const

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dots opacity-100 z-0" />

      {/* Soft color blobs */}
      <GlowBlob color="violet"  size={700} top="-100px" left="-150px" opacity={0.9} />
      <GlowBlob color="magenta" size={500} bottom="-50px" right="-80px" opacity={0.8} />
      <GlowBlob color="cyan"    size={350} top="30%"   right="8%"    opacity={0.7} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />

      <Container className="relative z-10 pt-28 pb-20">
        <motion.div style={{ y, opacity }}>
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left ── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <SectionLabel className="mb-6">Ecossistema 4PL</SectionLabel>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="font-display font-extrabold text-display-lg text-graphite mt-4 mb-6 leading-tight"
              >
                Logística que{' '}
                <span className="text-gradient">pensa</span>{' '}
                como o seu negócio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="text-graphite/60 text-body-lg max-w-xl mb-10 leading-relaxed"
              >
                Ecossistema 4PL que oferece visibilidade, controle em tempo real e otimização ao longo de toda a cadeia de suprimentos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="flex flex-wrap gap-3"
              >
                <Button size="lg" href="/contato">
                  Fale com um especialista
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button variant="secondary" size="lg" href="/solucoes">
                  Conhecer soluções
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease }}
                className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-brand/08"
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-extrabold text-heading-md text-graphite leading-none">{s.value}</div>
                    <div className="text-label text-graphite/45 uppercase tracking-widest mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right — Analytics card ── */}
            <motion.div
              initial={{ opacity: 0, x: 48, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="hidden lg:block relative"
            >
              <div className="glass rounded-card-lg p-6 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-mono text-brand/60 tracking-widest uppercase">Analytics by Vendemmia</p>
                    <p className="text-graphite font-bold mt-0.5">Visão Geral da Operação</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-mint bg-mint/10 px-3 py-1 rounded-full border border-mint/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                    Ao vivo
                  </span>
                </div>

                {/* Metrics 2×2 */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {METRICS.map((m) => (
                    <div key={m.label} className="bg-cream rounded-2xl p-4 border border-brand/06">
                      <p className="text-xs text-graphite/45 mb-1 truncate">{m.label}</p>
                      <p className="font-mono font-bold text-xl text-graphite">{m.value}</p>
                      <p
                        className="text-xs font-mono mt-1"
                        style={{ color: m.positive ? '#01E18E' : '#ff2f69' }}
                      >
                        {m.delta}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div>
                  <p className="text-xs text-graphite/40 mb-3">Embarques — últimos 7 dias</p>
                  <div className="flex items-end gap-1.5 h-20">
                    {BAR_HEIGHTS.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.07, ease: 'easeOut' }}
                        className="flex-1 rounded-sm"
                        style={{
                          background: 'linear-gradient(to top, #422c76, #ff2f69)',
                          opacity: 0.35 + (h / 100) * 0.65,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Soft accent */}
                <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-brand/06 blur-3xl pointer-events-none" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 flex items-center gap-3 z-10 border border-brand/10 shadow-card"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: 'linear-gradient(135deg, #422c76, #ff2f69)' }}
                >
                  🚢
                </div>
                <div>
                  <p className="font-bold text-sm text-graphite">Importação aprovada</p>
                  <p className="text-xs text-graphite/45 mt-0.5">Navegantes → São Paulo · 2min atrás</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-label text-graphite/30 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-brand to-transparent"
        />
      </div>
    </section>
  )
}
