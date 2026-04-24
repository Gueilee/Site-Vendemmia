'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/animations/FadeUp'

const FEATURED = {
  id: '3dUh13FWxA8',
  title: 'Vendemmia — Institucional',
  description: 'Conheça a Vendemmia, ecossistema 4PL líder em logística integrada no Brasil.',
  category: 'Institucional',
}

const SECONDARY_VIDEOS = [
  {
    id: '3iozFh4CIuY',
    title: 'O que é 4PL?',
    category: 'Educativo',
  },
  {
    id: 'pTyfm6x3RLQ',
    title: 'Conheça nosso armazém em Itapevi/SP',
    category: 'Tour',
  },
  {
    id: '5sXcMYICsjs',
    title: 'O que é uma empresa 4PL',
    category: 'Educativo',
  },
]

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@VendemmiaLog%C3%ADsticaIntegrada'

function PlayIcon() {
  return (
    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function FeaturedVideo({ id, title, description, category }: typeof FEATURED) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="rounded-card-lg overflow-hidden border border-brand/10 shadow-card-hover bg-white">
      {!playing ? (
        <button onClick={() => setPlaying(true)} className="w-full block group text-left">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-brand/20 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #422c76, #ff2f69)',
                  boxShadow: '0 8px 48px rgba(255,47,105,0.5)',
                }}
              >
                <PlayIcon />
              </motion.div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block text-xs font-semibold text-white/60 uppercase tracking-widest mb-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {category}
              </span>
              <p className="text-white font-display font-bold text-heading-sm leading-snug">{title}</p>
              <p className="text-white/60 text-sm mt-1">{description}</p>
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
    </div>
  )
}

function VideoCard({ id, title, category }: { id: string; title: string; category: string }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 bg-white rounded-2xl p-3 border border-brand/08 hover:border-brand/20 shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative w-28 h-16 rounded-xl overflow-hidden shrink-0">
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
            <svg className="w-3 h-3 text-brand ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <span className="text-xs font-semibold text-brand/50 uppercase tracking-widest">{category}</span>
        <p className="text-graphite font-bold text-sm mt-0.5 group-hover:text-brand transition-colors leading-snug line-clamp-2">
          {title}
        </p>
      </div>

      <svg className="w-4 h-4 text-graphite/25 group-hover:text-brand shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

export default function VideosSection() {
  return (
    <section className="py-section-lg bg-cream-mid relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <FadeUp className="text-center mb-12">
          <SectionLabel className="mb-4">Vídeos & Conteúdo</SectionLabel>
          <h2 className="font-display text-heading-xl text-graphite mt-4">
            Conheça a Vendemmia{' '}
            <span className="text-gradient">por dentro</span>
          </h2>
          <p className="text-graphite/55 text-body-lg mt-4 max-w-2xl mx-auto">
            Vídeos institucionais, tours pelas nossas unidades e conteúdos educativos sobre logística 4PL.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-5 items-start">
          {/* Featured video — 3 cols */}
          <FadeUp className="lg:col-span-3">
            <FeaturedVideo {...FEATURED} />
          </FadeUp>

          {/* Secondary videos — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <FadeUp>
              <p className="text-xs font-semibold text-graphite/40 uppercase tracking-widest mb-1 px-1">
                Mais vídeos
              </p>
            </FadeUp>
            {SECONDARY_VIDEOS.map((v, i) => (
              <FadeUp key={v.id} delay={0.05 + i * 0.07}>
                <VideoCard {...v} />
              </FadeUp>
            ))}

            {/* Channel CTA */}
            <FadeUp delay={0.25}>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 mt-2 py-3 px-5 rounded-2xl border border-red-500/20 bg-red-50 text-red-600 font-bold text-sm hover:bg-red-100 transition-colors duration-200"
              >
                <YouTubeIcon />
                Ver canal completo no YouTube
              </a>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  )
}
