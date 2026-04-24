import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos e insights sobre logística 4PL, supply chain e tecnologia logística.',
}

const POSTS = [
  { slug: 'o-que-e-4pl', title: 'O que é um operador 4PL e como ele difere do 3PL?', category: '4PL', date: '2025-03-15', excerpt: 'Entenda as diferenças entre os modelos de operação logística e por que o 4PL está transformando o supply chain brasileiro.', readTime: 6 },
  { slug: 'visibilidade-supply-chain', title: 'Visibilidade da cadeia de suprimentos: por que dados em tempo real são essenciais', category: 'Analytics', date: '2025-03-01', excerpt: 'Como a falta de visibilidade custa dinheiro e como a tecnologia pode mudar esse cenário.', readTime: 5 },
  { slug: 'reducao-custos-logisticos', title: '5 estratégias para reduzir custos logísticos sem abrir mão da qualidade', category: 'Gestão', date: '2025-02-20', excerpt: 'Práticas comprovadas que nossos clientes utilizam para otimizar operações e reduzir despesas.', readTime: 7 },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog & Artigos"
        title="Insights sobre"
        titleHighlight="logística inteligente"
        description="Tendências, análises e casos práticos do mundo da logística 4PL e supply chain."
      />
      <section className="py-section-lg bg-navy">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link href={`/conteudo/blog/${post.slug}`} className="block h-full">
                  <Card hover className="p-6 h-full flex flex-col group">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="violet">{post.category}</Badge>
                      <span className="text-white/30 text-xs font-mono">{post.readTime} min</span>
                    </div>
                    <h3 className="font-display text-white font-semibold mb-3 flex-1 group-hover:text-gradient transition-all">{post.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-white/30 text-xs">
                        {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="text-violet-light text-xs font-medium group-hover:underline">Ler artigo →</span>
                    </div>
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
