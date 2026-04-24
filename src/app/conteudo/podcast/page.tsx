'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'

const PLATFORMS = [
  { name: 'Spotify', href: 'https://open.spotify.com', icon: '🎵' },
  { name: 'Apple Podcasts', href: 'https://podcasts.apple.com', icon: '🎙' },
  { name: 'Google Podcasts', href: 'https://podcasts.google.com', icon: '🎧' },
  { name: 'YouTube', href: 'https://youtube.com', icon: '▶️' },
]

const TOPICS = [
  'Operações 4PL na prática',
  'Tendências de supply chain',
  'Cases de transformação logística',
  'Tecnologia e IA na logística',
  'Comércio exterior e importação',
  'Gestão de pessoas e liderança',
]

function NotifyForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 text-green-neon font-medium justify-center">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Perfeito! Você será notificado no lançamento.
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com.br"
        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-violet/50 transition-all"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary !py-3 !px-6 whitespace-nowrap"
      >
        {status === 'loading' ? '...' : 'Me avise →'}
      </button>
    </form>
  )
}

export default function PodcastPage() {
  return (
    <>
      <PageHero
        label="Podcast"
        title="Logística 4PL"
        titleHighlight="em áudio"
        description="Conversas com especialistas, cases de sucesso e tendências do supply chain para ouvir onde quiser."
      />

      <section className="py-section-lg bg-navy">
        <Container>
          <FadeUp>
            <div className="glass rounded-card p-10 md:p-16 text-center max-w-2xl mx-auto">
              <span className="text-6xl mb-6 block">🎙️</span>
              <h3 className="font-display text-heading-md text-white mb-3">Em produção</h3>
              <p className="text-white/60 mb-8 max-w-sm mx-auto leading-relaxed">
                Nosso podcast está sendo produzido com especialistas em logística, supply chain e tecnologia. Cadastre-se para ser notificado no lançamento.
              </p>
              <NotifyForm />
            </div>
          </FadeUp>

          {/* Themes preview */}
          <FadeUp delay={0.2} className="mt-16">
            <h3 className="font-display text-heading-md text-white text-center mb-8">
              Temas que vamos <span className="text-gradient">explorar</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {TOPICS.map((topic, i) => (
                <div key={topic} className="glass rounded-xl p-4 text-center">
                  <p className="text-white/70 text-sm">{topic}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Platforms */}
          <FadeUp delay={0.3} className="mt-16 text-center">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-6">Disponível em breve nas principais plataformas</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {PLATFORMS.map((p) => (
                <div key={p.name} className="glass rounded-xl px-5 py-3 flex items-center gap-2 opacity-50">
                  <span>{p.icon}</span>
                  <span className="text-white/70 text-sm font-medium">{p.name}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
