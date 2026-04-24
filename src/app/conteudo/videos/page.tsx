'use client'

import { useState } from 'react'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@VendemmiaLog%C3%ADsticaIntegrada'

const VIDEOS = [
  {
    id: '3dUh13FWxA8',
    title: 'Vendemmia — Institucional',
    description: 'Conheça a Vendemmia, ecossistema 4PL líder em logística integrada no Brasil.',
    category: 'Institucional',
    featured: true,
  },
  {
    id: '3iozFh4CIuY',
    title: 'O que é 4PL? | Vendemmia',
    description: 'Entenda o conceito de 4PL e como ele transforma a gestão da cadeia de suprimentos.',
    category: 'Educativo',
    featured: false,
  },
  {
    id: 'pTyfm6x3RLQ',
    title: 'Conheça nosso armazém em Itapevi/SP',
    description: 'Tour completo pela nossa unidade de armazenagem em Itapevi, São Paulo.',
    category: 'Tour',
    featured: false,
  },
  {
    id: '5sXcMYICsjs',
    title: 'O que é uma empresa 4PL | Vendemmia',
    description: 'Descubra o que significa ser uma empresa 4PL e quais são os diferenciais desse modelo.',
    category: 'Educativo',
    featured: false,
  },
  {
    id: 'lewnnD0Aubc',
    title: 'Logística integrada e energia solar',
    description: 'Como a logística integrada pode contribuir para o sucesso do negócio de energia solar.',
    category: 'Cases',
    featured: false,
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Institucional: 'bg-brand/10 text-brand border-brand/20',
  Educativo:     'bg-mint/10 text-mint-dark border-mint/20',
  Tour:          'bg-magenta/10 text-magenta-dark border-magenta/20',
  Cases:         'bg-amber-50 text-amber-700 border-amber-200',
}

function PlayIcon({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const s = size === 'lg' ? 'w-8 h-8' : size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'
  return (
    <svg className={`${s} text-white ml-0.5`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function VideoPlayer({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="rounded-card-lg overflow-hidden bg-black border border-brand/10 shadow-card-hover">
      {!playing ? (
        <button onClick={() => setPlaying(true)} className="w-full block group relative">
          <div className="aspect-video relative overflow-hidden">
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #422c76, #ff2f69)',
                  boxShadow: '0 8px 48px rgba(255,47,105,0.5)',
                }}
              >
                <PlayIcon size="lg" />
              </div>
            </div>
          </div>
        </button>
      ) : (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  )
}

function VideoCard({ id, title, description, category }: {
  id: string; title: string; description: string; category: string
}) {
  const [playing, setPlaying] = useState(false)
  const catClass = CATEGORY_COLORS[category] ?? 'bg-brand/10 text-brand border-brand/20'

  return (
    <div className="bg-white rounded-card overflow-hidden border border-brand/08 shadow-card hover:shadow-card-hover hover:border-brand/18 transition-all duration-300 group">
      {!playing ? (
        <button onClick={() => setPlaying(true)} className="w-full block">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #422c76, #ff2f69)' }}
              >
                <PlayIcon size="sm" />
              </div>
            </div>
          </div>
        </button>
      ) : (
        <div className="aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      <div className="p-5">
        <span className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${catClass}`}>
          {category}
        </span>
        <h3 className="font-display font-bold text-heading-sm text-graphite mt-3 mb-2 group-hover:text-brand transition-colors">
          {title}
        </h3>
        <p className="text-graphite/55 text-body-sm leading-relaxed">{description}</p>
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-brand text-sm font-bold mt-4 hover:text-brand-light transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Assistir no YouTube
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function VideosPage() {
  const featured = VIDEOS.find((v) => v.featured)!
  const rest = VIDEOS.filter((v) => !v.featured)

  return (
    <>
      <PageHero
        label="Vídeos & Webinars"
        title="Conheça a Vendemmia"
        titleHighlight="por dentro"
        description="Vídeos institucionais, tours pelas nossas unidades e conteúdos educativos sobre logística 4PL e supply chain."
      />

      <section className="py-section-lg bg-cream">
        <Container>

          {/* Featured video */}
          <FadeUp className="mb-16">
            <SectionLabel className="mb-6">Vídeo em destaque</SectionLabel>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <VideoPlayer id={featured.id} title={featured.title} />
              <div>
                <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border ${CATEGORY_COLORS[featured.category] ?? ''}`}>
                  {featured.category}
                </span>
                <h2 className="font-display font-bold text-heading-lg text-graphite mt-4 mb-3">
                  {featured.title}
                </h2>
                <p className="text-graphite/60 text-body-lg leading-relaxed mb-6">
                  {featured.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${featured.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  <svg className="w-5 h-5 text-red-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Assistir no YouTube
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Video grid */}
          <FadeUp>
            <SectionLabel className="mb-8">Todos os vídeos</SectionLabel>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rest.map((v, i) => (
              <FadeUp key={v.id} delay={i * 0.07}>
                <VideoCard {...v} />
              </FadeUp>
            ))}
          </div>

          {/* Channel CTA */}
          <FadeUp delay={0.3} className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4 bg-white rounded-card p-10 border border-brand/08 shadow-card">
              <span className="text-5xl">📺</span>
              <h3 className="font-display font-bold text-heading-sm text-graphite">
                Mais conteúdo no YouTube
              </h3>
              <p className="text-graphite/55 text-sm max-w-sm text-center leading-relaxed">
                Acesse nosso canal oficial e fique por dentro de todos os vídeos, webinars e novidades da Vendemmia.
              </p>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-5 h-5 text-red-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Acessar canal Vendemmia
              </a>
            </div>
          </FadeUp>

        </Container>
      </section>
    </>
  )
}
