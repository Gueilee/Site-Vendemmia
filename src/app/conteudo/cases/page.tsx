import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import Card from '@/components/ui/Card'
import Tag from '@/components/ui/Tag'

export const metadata: Metadata = {
  title: 'Cases de Sucesso',
  description: 'Resultados reais de clientes que transformaram sua logística com a Vendemmia.',
}

const CASES = [
  {
    slug: 'nec-reducao-40-custos',
    client: 'NEC',
    title: 'Redução de 40% nos custos de inventário',
    excerpt: 'Como a NEC transformou sua cadeia de suprimentos e reduziu custos de inventário em 40% com o modelo 4PL.',
    tags: ['Armazém', 'WMS', 'Supply Chain'],
    result: '40% menos custo',
  },
  {
    slug: 'motul-visibilidade-global',
    client: 'Motul',
    title: 'Visibilidade logística global em tempo real',
    excerpt: 'A Motul ganhou visibilidade completa de sua operação logística com o Analytics by Vendemmia.',
    tags: ['Analytics', 'Importação', '4PL'],
    result: '100% de visibilidade',
  },
  {
    slug: 'roland-parceria-estrategica',
    client: 'Roland',
    title: 'Parceria estratégica que transformou o supply chain',
    excerpt: 'Roland encontrou na Vendemmia o parceiro que entende suas necessidades e entrega soluções customizadas.',
    tags: ['4PL', 'Transportes', 'Customização'],
    result: '3 anos de parceria',
  },
]

export default function CasesPage() {
  return (
    <>
      <PageHero
        label="Cases de Sucesso"
        title="Resultados reais,"
        titleHighlight="clientes satisfeitos"
        description="Empresas líderes que transformaram sua operação logística com a Vendemmia."
      />
      <section className="py-section-lg bg-navy">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <FadeUp key={c.slug} delay={i * 0.1}>
                <Link href={`/conteudo/cases/${c.slug}`} className="block h-full">
                  <Card hover className="p-6 h-full flex flex-col group">
                    <div className="mb-4">
                      <span className="font-mono text-xs text-violet-light uppercase tracking-widest">{c.client}</span>
                    </div>
                    <h3 className="font-display text-white font-semibold text-lg mb-3 group-hover:text-gradient transition-all">{c.title}</h3>
                    <p className="text-white/60 text-sm mb-4 flex-1">{c.excerpt}</p>
                    <div className="border-t border-white/10 pt-4 mt-2">
                      <span className="font-mono text-2xl font-bold text-gradient">{c.result}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {c.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    </div>
                    <span className="text-violet-light text-xs font-medium mt-4 group-hover:underline">Ver case completo →</span>
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
