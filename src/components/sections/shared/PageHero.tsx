import React from 'react'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import GlowBlob from '@/components/animations/GlowBlob'
import TextReveal from '@/components/animations/TextReveal'
import FadeUp from '@/components/animations/FadeUp'
import Button from '@/components/ui/Button'

interface Cta {
  label: string
  href: string
}

interface PageHeroProps {
  badge?: string
  label?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  description?: string
  primaryCta?: Cta
  secondaryCta?: Cta
  backgroundType?: 'dark' | 'gradient' | 'grid'
  children?: React.ReactNode
}

export default function PageHero({
  badge,
  label,
  title,
  titleHighlight,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundType = 'grid',
  children,
}: PageHeroProps) {
  const badgeText = badge ?? label
  const subtitleText = subtitle ?? description
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Backgrounds */}
      {backgroundType === 'grid' && (
        <div className="absolute inset-0 bg-grid opacity-50" />
      )}
      {backgroundType === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-dark" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />

      {/* Glow */}
      <GlowBlob color="violet" size={500} top="-100px" left="-100px" opacity={0.5} />
      <GlowBlob color="magenta" size={400} bottom="0" right="0" opacity={0.3} />

      <Container className="relative z-10">
        <div className={`grid gap-16 items-center ${children ? 'lg:grid-cols-2' : ''}`}>
          <div>
            {badgeText && (
              <SectionLabel className="mb-6">{badgeText}</SectionLabel>
            )}

            <h1 className="font-display text-display-md text-white mt-4 leading-tight">
              <TextReveal text={title} as="span" className="block" />
              {titleHighlight && (
                <TextReveal
                  text={titleHighlight}
                  as="span"
                  delay={0.15}
                  className="block text-gradient"
                />
              )}
            </h1>

            {subtitleText && (
              <FadeUp delay={0.4}>
                <p className="text-slate-400 text-body-lg mt-6 max-w-xl leading-relaxed">
                  {subtitleText}
                </p>
              </FadeUp>
            )}

            {(primaryCta || secondaryCta) && (
              <FadeUp delay={0.45}>
                <div className="flex gap-4 mt-10 flex-wrap">
                  {primaryCta && (
                    <Button variant="primary" href={primaryCta.href} size="lg">
                      {primaryCta.label}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button variant="secondary" href={secondaryCta.href} size="lg">
                      {secondaryCta.label}
                    </Button>
                  )}
                </div>
              </FadeUp>
            )}
          </div>

          {children && (
            <FadeUp delay={0.2}>
              <div>{children}</div>
            </FadeUp>
          )}
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="text-slate-500 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
