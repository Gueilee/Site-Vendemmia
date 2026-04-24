import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/animations/FadeUp'
import { SOLUTIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Soluções',
  description: 'Conheça as soluções 4PL da Vendemmia: importação, armazém, transportes e analytics.',
}

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        label="Nossas Soluções"
        title="Uma plataforma logística"
        titleHighlight="completa e integrada"
        description="Do ponto de origem até o destino final. Cada vertical conectada, cada dado visível, cada decisão mais inteligente."
      />
      <section className="py-section-lg bg-navy">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS.map((solution, i) => (
              <FadeUp key={solution.id} delay={i * 0.1}>
                <Link href={solution.href}>
                  <Card hover className="p-8 h-full group">
                    <span className="text-5xl mb-6 block">{solution.icon}</span>
                    <h2 className="font-display text-heading-md text-white mb-3 group-hover:text-gradient transition-all">
                      {solution.title}
                    </h2>
                    <p className="text-white/60 text-body-md mb-6">{solution.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {solution.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    </div>
                    <Button variant="ghost">
                      Saiba mais
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </Card>
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
