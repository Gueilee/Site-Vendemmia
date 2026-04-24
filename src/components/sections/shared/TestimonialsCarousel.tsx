'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'
import type { Testimonial } from '@/types'

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
  showHeader?: boolean
  title?: string
  dark?: boolean
}

const AUTOPLAY_MS = 5000

export default function TestimonialsCarousel({
  testimonials = TESTIMONIALS,
  showHeader = false,
  title = 'O que nossos clientes dizem',
  dark = false,
}: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused]   = useState(false)

  const next = useCallback(() => setCurrent((i) => (i + 1) % testimonials.length), [testimonials.length])
  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [next, paused])

  const cardBg     = dark ? 'rgba(255,255,255,0.07)' : '#ffffff'
  const cardBorder = dark ? 'rgba(255,255,255,0.10)' : 'rgba(66,44,118,0.08)'
  const textMain   = dark ? 'rgba(255,255,255,0.85)' : '#414042'
  const textSub    = dark ? 'rgba(255,255,255,0.45)' : 'rgba(65,64,66,0.50)'
  const arrowBg    = dark ? 'rgba(255,255,255,0.07)' : '#ffffff'
  const arrowBorder = dark ? 'rgba(255,255,255,0.12)' : 'rgba(66,44,118,0.10)'
  const arrowColor = dark ? 'rgba(255,255,255,0.60)' : 'rgba(66,44,118,0.50)'
  const divider    = dark ? 'rgba(255,255,255,0.08)' : 'rgba(66,44,118,0.06)'
  const quoteMark  = dark ? 'rgba(255,255,255,0.06)' : 'rgba(66,44,118,0.06)'

  return (
    <>
      {showHeader && (
        <div className="text-center mb-14">
          <h2 className="font-display text-heading-xl mt-4" style={{ color: textMain }}>{title}</h2>
        </div>
      )}

      <div
        className="max-w-3xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-card p-8 md:p-12"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                backdropFilter: dark ? 'blur(16px)' : undefined,
                boxShadow: dark ? 'none' : '0 2px 16px rgba(66,44,118,0.06)',
              }}
            >
              <div
                className="text-8xl font-serif leading-none mb-4 select-none"
                style={{ color: quoteMark }}
                aria-hidden
              >
                "
              </div>

              <p className="text-body-lg leading-[1.8] mb-10" style={{ color: textMain }}>
                {testimonials[current].quote}
              </p>

              <div className="flex items-center gap-4 pt-6" style={{ borderTop: `1px solid ${divider}` }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: 'linear-gradient(135deg, #422c76, #ff2f69)' }}
                >
                  {testimonials[current].author[0]}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: textMain }}>{testimonials[current].author}</p>
                  <p className="text-sm" style={{ color: textSub }}>{testimonials[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: arrowBg, border: `1px solid ${arrowBorder}`, color: arrowColor }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: arrowBg, border: `1px solid ${arrowBorder}`, color: arrowColor }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 32 : 8,
                height: 8,
                background: i === current
                  ? 'linear-gradient(90deg, #422c76, #ff2f69)'
                  : dark ? 'rgba(255,255,255,0.20)' : 'rgba(66,44,118,0.15)',
              }}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
