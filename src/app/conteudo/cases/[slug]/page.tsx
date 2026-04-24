import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import Tag from '@/components/ui/Tag'
import FadeUp from '@/components/animations/FadeUp'

/* ─── Case data ──────────────────────────────────────────────── */
interface CaseResult { label: string; value: string; description: string }
interface CaseData {
  title: string
  client: string
  tags: string[]
  excerpt: string
  challenge: string
  solution: string
  results: CaseResult[]
  testimonial?: { quote: string; author: string; role: string }
  relatedCases: string[]
}

const CASES: Record<string, CaseData> = {
  'nec-reducao-40-custos': {
    title: 'Redução de 40% nos custos de inventário',
    client: 'NEC',
    tags: ['Armazém', 'WMS', 'Supply Chain'],
    excerpt: 'Como a NEC transformou sua cadeia de suprimentos e reduziu custos de inventário em 40% com o modelo 4PL.',
    challenge: `A NEC Brasil operava com um modelo logístico fragmentado: múltiplos operadores de armazém sem integração de dados, processos manuais de controle de inventário e visibilidade quase zero sobre o status real dos estoques.

O resultado era um excesso de estoque de segurança — capital imobilizado como proteção contra incertezas que poderiam ser eliminadas com dados confiáveis. Além disso, a falta de controle sobre entradas e saídas gerava divergências frequentes entre o estoque sistêmico e o físico, exigindo inventários presenciais mensais que paralisavam a operação por horas.

A empresa buscava um parceiro capaz de integrar toda a gestão logística, eliminar os silos de informação e gerar economias reais — sem comprometer os níveis de serviço para o cliente final.`,
    solution: `A Vendemmia assumiu a gestão 4PL da operação logística da NEC, integrando armazém, transporte e importação em um único fluxo gerenciado com o Analytics by Vendemmia.

O primeiro passo foi a implementação do WMS (Warehouse Management System) integrado ao ERP da NEC, eliminando os registros manuais e garantindo sincronização em tempo real do estoque. Sensores RFID nas posições críticas do armazém permitiram rastreamento automático de movimentações.

Em seguida, foram criados modelos de previsão de demanda usando o histórico dos últimos 24 meses, ajustando os pontos de reposição de forma dinâmica por SKU. Isso substituiu o estoque de segurança "fixo" por um modelo adaptativo que responde às variações reais da demanda.

Por fim, a gestão ativa das transportadoras — com SLAs contratuais e dashboards de desempenho — reduziu o número de fretes emergenciais que compensavam atrasos e erros de planejamento anteriores.`,
    results: [
      { label: 'Redução de custos de inventário', value: '40%', description: 'Eliminação de estoque de segurança em excesso por meio de previsão de demanda precisa' },
      { label: 'Acuracidade de inventário', value: '99,2%', description: 'De divergências frequentes para uma das maiores acuracidades do setor de TI' },
      { label: 'Redução de fretes emergenciais', value: '78%', description: 'Planejamento antecipado substituiu entregas urgentes de alto custo' },
      { label: 'Tempo de inventário físico', value: '−85%', description: 'De inventários mensais que paralisavam a operação para contagens automáticas rotineiras' },
    ],
    testimonial: {
      quote: 'A Vendemmia entendeu nossa operação de forma muito rápida. Em seis meses já tínhamos visibilidade de tudo e os custos começaram a cair consistentemente. O Analytics nos deu uma transparência que nunca havíamos tido.',
      author: 'Gerente de Supply Chain',
      role: 'NEC Brasil',
    },
    relatedCases: ['motul-visibilidade-global', 'roland-parceria-estrategica'],
  },

  'motul-visibilidade-global': {
    title: 'Visibilidade logística global em tempo real',
    client: 'Motul',
    tags: ['Analytics', 'Importação', '4PL'],
    excerpt: 'A Motul ganhou visibilidade completa de sua operação logística com o Analytics by Vendemmia.',
    challenge: `A Motul, referência mundial em lubrificantes de alta performance, opera no Brasil com uma cadeia logística complexa: importações regulares da França e de outros polos fabris internacionais, armazenagem em São Paulo e distribuição para toda a rede de revendedores no país.

O maior desafio era a ausência de visibilidade integrada entre as etapas. O time de supply chain precisava consultar separadamente o agente de cargas para status de embarques, o despachante para a situação aduaneira, o operador de armazém para posição de estoque e as transportadoras para informações de entrega — cada um com sistemas e relatórios próprios, sem conexão entre si.

Essa fragmentação gerava atrasos de informação de dias (às vezes semanas), dificultava o planejamento de reposição e impedia a construção de KPIs consistentes para avaliação do desempenho logístico global.`,
    solution: `A Vendemmia estruturou um modelo 4PL que centralizou a gestão de toda a cadeia da Motul no Brasil — desde o booking de embarques internacionais até a entrega ao distribuidor.

A integração tecnológica foi o coração do projeto: o Analytics by Vendemmia passou a conectar em tempo real o sistema de agenciamento de cargas, os portais aduaneiros (Siscomex), o WMS do armazém e os sistemas das transportadoras. Tudo visível em um único dashboard personalizado para o time da Motul.

Foram criados alertas automáticos para os eventos críticos da cadeia: navios com atraso, processos de desembaraço com documentação pendente, estoques abaixo do ponto de reposição e cargas com entrega em risco. O time da Motul passou a receber notificações proativas, eliminando a necessidade de consultas reativas.

Em paralelo, a Vendemmia assumiu a gestão dos contratos com transportadoras e o SLA de entrega, aplicando multas contratuais automáticas em caso de desvio — o que rapidamente melhorou o índice de on-time delivery.`,
    results: [
      { label: 'Visibilidade da cadeia', value: '100%', description: 'Todos os eventos da cadeia visíveis em tempo real, do embarque à entrega' },
      { label: 'Redução do tempo de consulta', value: '90%', description: 'De horas consultando múltiplos sistemas para segundos em um único dashboard' },
      { label: 'Melhora no on-time delivery', value: '+28pp', description: 'De 61% para 89% de entregas no prazo após gestão ativa de transportadoras' },
      { label: 'Redução de custos de importação', value: '15%', description: 'Otimização de regimes tributários e consolidação de embarques' },
    ],
    testimonial: {
      quote: 'Uma das maiores vantagens do Analytics by Vendemmia é que finalmente conseguimos medir tudo. Antes, nossos KPIs logísticos eram construídos sobre estimativas. Hoje temos dados reais e conseguimos cobrar resultados com evidências.',
      author: 'Diretor de Operações',
      role: 'Motul Brasil',
    },
    relatedCases: ['nec-reducao-40-custos', 'roland-parceria-estrategica'],
  },

  'roland-parceria-estrategica': {
    title: 'Parceria estratégica que transformou o supply chain',
    client: 'Roland',
    tags: ['4PL', 'Transportes', 'Customização'],
    excerpt: 'Roland encontrou na Vendemmia o parceiro que entende suas necessidades e entrega soluções customizadas.',
    challenge: `A Roland DG, fabricante japonesa de equipamentos de impressão e corte, enfrenta no Brasil uma operação logística com características únicas: produtos de alto valor agregado, alto volume de importações do Japão e da Europa, necessidade de armazenagem especializada e uma rede de distribuidores espalhada por todo o país.

O grande desafio era encontrar um parceiro logístico que entendesse as peculiaridades do negócio — produtos delicados que exigem cuidados específicos de manuseio, peças sobressalentes com necessidade de entrega urgente, equipamentos de demonstração que circulam entre revendedores — e conseguisse gerenciar tudo isso de forma integrada.

Tentativas anteriores com operadores logísticos tradicionais resultavam em processos padronizados que não se adaptavam às necessidades da Roland. O time interno precisava constantemente intervir para resolver exceções, o que gerava sobrecarga operacional e impedia o foco estratégico.`,
    solution: `Desde o início da parceria, a Vendemmia adotou uma abordagem diferente: antes de propor qualquer solução, passou três semanas mapeando profundamente as operações da Roland — entendendo os produtos, os clientes, os fluxos e as principais dores.

Com esse entendimento, foi estruturado um modelo 4PL completamente customizado. O armazém em Itapevi/SP foi adaptado com zonas específicas para equipamentos de alto valor, um sistema de controle de números de série integrado ao ERP da Roland e um processo dedicado para gestão de devoluções e equipamentos de demonstração.

Na importação, a equipe de comércio exterior da Vendemmia trabalhou com a Roland para otimizar os processos de desembaraço, reduzindo o lead time de liberação e identificando oportunidades em regimes especiais. Um canal dedicado foi criado para cargas urgentes de peças sobressalentes.

O Analytics by Vendemmia foi configurado com os KPIs específicos da Roland: tempo de entrega por categoria de produto, taxa de avaria em transporte, lead time de importação e custo logístico por unidade vendida — métricas que hoje fundamentam as decisões estratégicas da empresa.`,
    results: [
      { label: 'Parceria consolidada', value: '3+ anos', description: 'Renovação contínua com expansão do escopo ao longo do relacionamento' },
      { label: 'Redução de lead time de importação', value: '−35%', description: 'Otimização dos processos de desembaraço e gestão documental' },
      { label: 'Taxa de avaria em transporte', value: '<0,1%', description: 'Processos especializados para equipamentos de alto valor' },
      { label: 'Redução de horas de gestão interna', value: '60%', description: 'Time interno focado em crescimento, não em resolver exceções logísticas' },
    ],
    testimonial: {
      quote: 'A Vendemmia entende onde você está, para onde quer ir, e constrói a operação logística para esse destino. Não é um fornecedor — é um parceiro estratégico que cresce junto com o negócio.',
      author: 'Head of Operations',
      role: 'Roland DG Brasil',
    },
    relatedCases: ['nec-reducao-40-custos', 'motul-visibilidade-global'],
  },
}

/* ─── Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = CASES[slug]
  if (!c) return { title: 'Case não encontrado' }
  return {
    title: `${c.client}: ${c.title}`,
    description: c.excerpt,
  }
}

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }))
}

/* ─── Page ───────────────────────────────────────────────────── */
export default async function CaseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = CASES[slug]
  if (!c) notFound()

  return (
    <article className="pt-32 pb-20 bg-navy min-h-screen">
      <Container size="md">

        {/* Back */}
        <Link href="/conteudo/cases" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Voltar para Cases
        </Link>

        {/* Header */}
        <SectionLabel className="mb-4">{c.client}</SectionLabel>
        <h1 className="font-display text-display-md text-white mt-4 mb-6 leading-tight">
          {c.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-10">
          {c.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>

        {/* Results grid */}
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {c.results.map((r) => (
              <div key={r.label} className="glass rounded-card p-5 text-center">
                <div className="font-mono text-3xl font-bold text-gradient mb-1">{r.value}</div>
                <p className="text-white/50 text-xs leading-snug">{r.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Challenge */}
        <section className="mb-10">
          <h2 className="font-display text-heading-md text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center text-sm">⚠</span>
            O Desafio
          </h2>
          <div className="glass rounded-card p-6 space-y-4">
            {c.challenge.trim().split('\n\n').map((para, i) => (
              <p key={i} className="text-white/70 text-body-md leading-relaxed">{para.trim()}</p>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="mb-10">
          <h2 className="font-display text-heading-md text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-violet/20 border border-violet/30 flex items-center justify-center text-sm">✦</span>
            A Solução Vendemmia
          </h2>
          <div className="glass rounded-card p-6 space-y-4">
            {c.solution.trim().split('\n\n').map((para, i) => (
              <p key={i} className="text-white/70 text-body-md leading-relaxed">{para.trim()}</p>
            ))}
          </div>
        </section>

        {/* Results detail */}
        <section className="mb-10">
          <h2 className="font-display text-heading-md text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-green-neon/20 border border-green-neon/30 flex items-center justify-center text-sm">✓</span>
            Resultados
          </h2>
          <div className="space-y-4">
            {c.results.map((r) => (
              <FadeUp key={r.label}>
                <div className="glass rounded-xl p-5 flex items-start gap-5">
                  <div className="font-mono text-2xl font-bold text-gradient shrink-0 w-24 text-center">{r.value}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{r.label}</p>
                    <p className="text-white/50 text-sm mt-0.5">{r.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {c.testimonial && (
          <FadeUp>
            <blockquote className="glass rounded-card p-8 mb-10 relative">
              <div className="absolute top-6 left-6 text-violet/30 font-display text-6xl leading-none select-none">&ldquo;</div>
              <p className="text-white/80 text-body-lg italic leading-relaxed pl-8 pt-4">
                {c.testimonial.quote}
              </p>
              <footer className="mt-6 pl-8">
                <p className="text-white font-semibold text-sm">{c.testimonial.author}</p>
                <p className="text-white/40 text-xs">{c.testimonial.role}</p>
              </footer>
            </blockquote>
          </FadeUp>
        )}

        {/* CTA */}
        <div className="glass rounded-card p-8 text-center mb-14">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Sua empresa pode ser o próximo case</p>
          <h3 className="font-display text-heading-md text-white mb-4">
            Pronto para transformar sua operação?
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            Fale com nossos especialistas e descubra como o modelo 4PL da Vendemmia pode gerar resultados concretos para o seu negócio.
          </p>
          <Link href="/contato" className="btn-primary inline-flex">
            Quero resultados como esses
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Related */}
        {c.relatedCases.length > 0 && (
          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-6">Outros cases</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {c.relatedCases.map((s) => {
                const related = CASES[s]
                if (!related) return null
                return (
                  <Link key={s} href={`/conteudo/cases/${s}`} className="glass rounded-card p-5 hover:border-violet/30 transition-colors group">
                    <p className="text-violet-light text-xs font-mono uppercase tracking-widest mb-2">{related.client}</p>
                    <h4 className="text-white font-medium text-sm group-hover:text-gradient transition-all leading-snug">{related.title}</h4>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {related.tags.slice(0, 2).map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

      </Container>
    </article>
  )
}
