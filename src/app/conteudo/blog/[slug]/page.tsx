import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import Badge from '@/components/ui/Badge'

/* ─── Article data ───────────────────────────────────────────── */
const POSTS: Record<string, {
  title: string
  date: string
  category: string
  readTime: number
  excerpt: string
  author: { name: string; role: string }
  body: React.ReactNode
}> = {
  'o-que-e-4pl': {
    title: 'O que é um operador 4PL e como ele difere do 3PL?',
    date: '2025-03-15',
    category: '4PL',
    readTime: 6,
    excerpt: 'Entenda as diferenças entre os modelos de operação logística e por que o 4PL está transformando o supply chain brasileiro.',
    author: { name: 'Equipe Vendemmia', role: 'Especialistas em Supply Chain' },
    body: (
      <div className="space-y-6">
        <p>
          No universo da logística, os termos 3PL e 4PL são frequentemente usados, mas poucas empresas compreendem a diferença real entre eles — e como essa diferença pode impactar diretamente a eficiência e o custo da cadeia de suprimentos.
        </p>

        <h2>O que é 3PL?</h2>
        <p>
          O <strong>3PL (Third-Party Logistics)</strong> é o modelo mais comum: a empresa contrata um prestador externo para executar funções logísticas como transporte, armazenagem e distribuição. O 3PL executa a operação, mas a gestão estratégica permanece com o cliente.
        </p>
        <p>
          Exemplos de atividades 3PL incluem: contratação de transportadoras, operação de armazéns e despacho aduaneiro. O cliente ainda precisa coordenar cada provedor separadamente, consolidar dados de diferentes sistemas e tomar decisões sem uma visão unificada da cadeia.
        </p>

        <h2>O que muda no 4PL?</h2>
        <p>
          O <strong>4PL (Fourth-Party Logistics)</strong> vai um nível acima. Além de executar, o operador 4PL <strong>integra e gerencia toda a cadeia logística</strong>, incluindo outros provedores de serviço. Ele atua como o único ponto de contato estratégico entre o cliente e o ecossistema logístico.
        </p>

        <blockquote>
          &ldquo;O 4PL não apenas move cargas. Ele orquestra toda a inteligência por trás da operação.&rdquo;
        </blockquote>

        <p>As principais responsabilidades de um 4PL incluem:</p>
        <ul>
          <li>Seleção e gestão de provedores 3PL, transportadoras e despachantes</li>
          <li>Integração de dados de todos os sistemas em uma plataforma única</li>
          <li>Análise preditiva para antecipar gargalos e otimizar custos</li>
          <li>Relatórios executivos e indicadores de desempenho (KPIs)</li>
          <li>Melhoria contínua de processos e benchmarking de mercado</li>
        </ul>

        <h2>Comparativo prático: 3PL vs. 4PL</h2>
        <p>
          Imagine uma empresa que importa produtos da Ásia, armazena em dois galpões no Brasil e distribui para clientes em todo o país. Com o modelo 3PL, ela precisaria gerenciar separadamente: um despachante aduaneiro, dois operadores de armazém, múltiplas transportadoras regionais e um sistema de TMS (Transportation Management System).
        </p>
        <p>
          Com o modelo 4PL, um único parceiro estratégico assume a coordenação de todos esses elos. Ele integra os dados de cada etapa, gera visibilidade ponta a ponta e entrega relatórios consolidados — permitindo que o time interno da empresa foque no core business.
        </p>

        <h2>Por que o 4PL está crescendo no Brasil?</h2>
        <p>
          O supply chain brasileiro enfrenta desafios únicos: complexidade tributária, infraestrutura heterogênea e operações de importação que exigem especialização profunda. Nesse cenário, as empresas que tentam gerenciar todos esses fatores internamente acabam com equipes sobrecarregadas e processos fragmentados.
        </p>
        <p>
          O modelo 4PL resolve isso ao transformar a logística em uma competência estratégica, não apenas operacional. A Vendemmia, por exemplo, integra desde o desembaraço aduaneiro até a última milha — com tudo visível em tempo real no Analytics by Vendemmia.
        </p>

        <h2>Como saber se minha empresa precisa de um 4PL?</h2>
        <p>Algumas perguntas que indicam que chegou a hora de considerar o modelo 4PL:</p>
        <ul>
          <li>Você tem dificuldade de ter visibilidade consolidada de toda a operação logística?</li>
          <li>Sua equipe passa mais tempo coordenando fornecedores do que pensando estrategicamente?</li>
          <li>Você importa produtos e sente que o processo é opaco e cheio de surpresas?</li>
          <li>Seus KPIs logísticos são difíceis de medir ou comparar ao longo do tempo?</li>
          <li>Você gerencia mais de dois modais de transporte ou dois armazéns?</li>
        </ul>
        <p>
          Se a resposta for sim para duas ou mais dessas perguntas, o 4PL pode ser o próximo passo para transformar sua operação.
        </p>

        <h2>Conclusão</h2>
        <p>
          A diferença entre 3PL e 4PL não é apenas operacional — é estratégica. Enquanto o 3PL executa, o 4PL pensa, integra e transforma dados em decisões. Para empresas com cadeias logísticas complexas, o 4PL representa a evolução natural rumo à eficiência real e à competitividade sustentável.
        </p>
      </div>
    ),
  },

  'visibilidade-supply-chain': {
    title: 'Visibilidade da cadeia de suprimentos: por que dados em tempo real são essenciais',
    date: '2025-03-01',
    category: 'Analytics',
    readTime: 5,
    excerpt: 'Como a falta de visibilidade custa dinheiro e como a tecnologia pode mudar esse cenário.',
    author: { name: 'Equipe Vendemmia', role: 'Especialistas em Analytics Logístico' },
    body: (
      <div className="space-y-6">
        <p>
          Em uma pesquisa recente com gestores de supply chain brasileiros, 67% afirmaram que sua maior dificuldade operacional é a <strong>falta de visibilidade em tempo real</strong> sobre o status das mercadorias, estoques e transportes. Esse problema, aparentemente técnico, tem consequências financeiras concretas.
        </p>

        <h2>O custo invisível da falta de visibilidade</h2>
        <p>
          Quando um gestor não sabe exatamente onde está uma carga, quanto tempo vai demorar para chegar ou qual o nível real do estoque, ele toma decisões baseadas em estimativas. Cada estimativa errada gera custo: pedidos duplicados, rupturas de estoque, pagamento de frete expresso por urgência que poderia ter sido evitada, multas por atraso de entrega ao cliente final.
        </p>
        <p>
          Estudos do Gartner indicam que empresas com baixa visibilidade logística gastam, em média, <strong>12% a mais</strong> em custos operacionais do que concorrentes com dados integrados em tempo real.
        </p>

        <h2>O que significa visibilidade de ponta a ponta?</h2>
        <p>
          Visibilidade de ponta a ponta (end-to-end) significa ter acesso instantâneo ao status de qualquer evento logístico — desde a saída do fornecedor no exterior até a entrega na doca do cliente. Isso inclui:
        </p>
        <ul>
          <li><strong>Rastreamento de embarques internacionais</strong> — ETA atualizado por BL, posição do navio, alertas de demurrage</li>
          <li><strong>Status de desembaraço aduaneiro</strong> — etapas do processo de importação, documentos pendentes</li>
          <li><strong>Ocupação e movimentação de armazém</strong> — entradas, saídas, posições de estoque em tempo real</li>
          <li><strong>Rastreamento de transporte</strong> — posição GPS de veículos, alertas de desvio de rota, ETD/ETA</li>
          <li><strong>KPIs consolidados</strong> — on-time delivery, lead time, acuracidade de inventário</li>
        </ul>

        <h2>Por que a integração de dados é o maior desafio?</h2>
        <p>
          A maioria das empresas possui dados logísticos — o problema é que eles estão fragmentados em sistemas diferentes: ERP, planilhas Excel, sistemas de transportadoras, portais de despachantes. Consolidar essas informações manualmente é lento, propenso a erros e sempre atrasado.
        </p>
        <p>
          A solução é uma plataforma que integre via API todos esses sistemas e apresente os dados num único painel. É exatamente o que o <strong>Analytics by Vendemmia</strong> faz: conecta ERP, WMS, TMS e sistemas externos para gerar uma visão unificada da cadeia.
        </p>

        <blockquote>
          &ldquo;Antes do Analytics, eu precisava consultar quatro sistemas diferentes para saber o status de um pedido. Hoje, abro um painel e tenho tudo.&rdquo; — Gerente de Logística, cliente Vendemmia
        </blockquote>

        <h2>Alertas proativos: de reativo para preditivo</h2>
        <p>
          O maior salto de qualidade não é apenas ver o que está acontecendo, mas ser avisado antes que um problema vire crise. Sistemas de analytics avançados usam Machine Learning para identificar padrões e gerar alertas automáticos:
        </p>
        <ul>
          <li>Carga com risco de atraso baseado no histórico de desempenho da transportadora</li>
          <li>Estoque projetado abaixo do ponto de reposição nos próximos 7 dias</li>
          <li>Divergência entre nota fiscal e romaneio de entrega</li>
          <li>Custos de armazenagem acima da média histórica na última semana</li>
        </ul>

        <h2>Como implementar visibilidade real na sua empresa</h2>
        <p>
          O caminho começa com um mapeamento das fontes de dados existentes e das principais dores de visibilidade. Em seguida, a integração via APIs permite consolidar as informações sem substituir sistemas legados. O resultado é um dashboard personalizado com os KPIs mais relevantes para o seu negócio.
        </p>
        <p>
          Empresas que fizeram essa transição relatam redução de 30% no tempo dedicado a relatórios manuais e aumento de 20% na capacidade de resposta a imprevistos — porque deixam de ser reativas e passam a ser preditivas.
        </p>

        <h2>Conclusão</h2>
        <p>
          Visibilidade não é luxo — é condição competitiva. Em um mercado onde prazos apertam e margens encolhem, ter dados em tempo real sobre toda a cadeia logística é o que separa empresas que crescem de forma sustentável das que vivem apagando incêndios.
        </p>
      </div>
    ),
  },

  'reducao-custos-logisticos': {
    title: '5 estratégias para reduzir custos logísticos sem abrir mão da qualidade',
    date: '2025-02-20',
    category: 'Gestão',
    readTime: 7,
    excerpt: 'Práticas comprovadas que nossos clientes utilizam para otimizar operações e reduzir despesas.',
    author: { name: 'Equipe Vendemmia', role: 'Especialistas em Otimização Logística' },
    body: (
      <div className="space-y-6">
        <p>
          Reduzir custos logísticos é um objetivo universal — mas a abordagem errada pode comprometer o nível de serviço e gerar custos maiores no longo prazo. As estratégias a seguir são utilizadas pelos nossos clientes para obter eficiência real sem sacrificar qualidade.
        </p>

        <h2>1. Consolidação de cargas e otimização de rotas</h2>
        <p>
          Um dos maiores desperdícios logísticos é o envio de veículos com capacidade ociosa. A consolidação de cargas — agregando pedidos de múltiplos clientes ou fornecedores no mesmo veículo — pode reduzir o custo de frete em 20% a 35%.
        </p>
        <p>
          Para que isso funcione, é necessário visibilidade dos pedidos com antecedência suficiente para planejar as consolidações. Sistemas de TMS (Transportation Management System) com algoritmos de roteirização avançada identificam automaticamente as melhores combinações de carga e rota.
        </p>

        <h2>2. Gestão ativa de estoque com dados reais</h2>
        <p>
          Estoque em excesso é capital imobilizado. Estoque insuficiente gera rupturas e fretes express. O equilíbrio ideal depende de dados precisos sobre demanda histórica, lead time de fornecedores e sazonalidade.
        </p>
        <p>
          Empresas que implementam modelos de previsão de demanda baseados em dados históricos reais conseguem reduzir o estoque médio em 15% a 25% mantendo o mesmo nível de serviço — liberando capital de giro e reduzindo custos de armazenagem.
        </p>

        <blockquote>
          &ldquo;Reduzimos o estoque médio em 18% no primeiro ano após implementar o Analytics. O nível de serviço aumentou porque paramos de fazer pedidos emergenciais.&rdquo; — Diretor de Supply Chain, indústria de bens de consumo
        </blockquote>

        <h2>3. Revisão dos regimes de importação</h2>
        <p>
          Para empresas que importam, a tributação pode representar 30% a 50% do custo total de uma mercadoria. Regimes especiais como <strong>Drawback</strong>, <strong>RECOF</strong> e <strong>Ex-Tarifário</strong> podem reduzir significativamente essa carga — mas exigem conhecimento técnico especializado para habilitação e controle.
        </p>
        <p>
          Nossa equipe de consultoria tributária já identificou oportunidades de redução de custos de importação que variaram de 8% a 23% dependendo do NCM e do perfil de operação do cliente. A habilitação nos regimes corretos é um investimento com retorno rápido e mensurável.
        </p>

        <h2>4. Negociação baseada em dados com transportadoras</h2>
        <p>
          A maioria das empresas negocia contratos de transporte com base em feeling ou em tabelas padrão das transportadoras. Uma abordagem data-driven muda completamente a dinâmica: com histórico de volume por rota, desempenho de entrega, índice de avarias e custo por kg transportado, você negocia com evidências.
        </p>
        <p>
          Transportadoras com baixo índice de on-time delivery, por exemplo, devem ser penalizadas contratualmente ou substituídas. Aquelas que consistentemente superam o SLA merecem volume adicional. Esse processo de gestão ativa de transportadoras pode reduzir o custo médio de frete em 10% a 18%.
        </p>

        <h2>5. Terceirização estratégica via modelo 4PL</h2>
        <p>
          Manter equipes internas para gerenciar toda a complexidade logística é caro. A terceirização através de um operador 4PL transfere não apenas a execução, mas também o overhead de gestão: ferramentas de TI, treinamento de equipes, gestão de fornecedores e inteligência de dados.
        </p>
        <p>
          O modelo 4PL é especialmente eficiente para empresas com operações complexas — múltiplos armazéns, importações regulares e distribuição nacional — porque o custo fixo é diluído entre todos os clientes do operador, e a inteligência acumulada de diferentes setores beneficia cada operação.
        </p>

        <h2>Como priorizar as estratégias?</h2>
        <p>
          O ponto de partida é um diagnóstico da operação atual: onde estão os maiores custos, quais processos são mais ineficientes e quais melhorias teriam maior impacto com menor complexidade de implementação. Uma análise de custo-benefício para cada iniciativa ajuda a construir um roadmap realista.
        </p>
        <p>
          Na Vendemmia, realizamos esse diagnóstico como parte do processo de proposta — mapeando a operação do cliente e identificando as alavancas de maior retorno antes de definir o escopo do projeto.
        </p>

        <h2>Conclusão</h2>
        <p>
          Reduzir custos logísticos com inteligência é possível — e os resultados são duradouros quando as estratégias são baseadas em dados reais, não em cortes arbitrários. As cinco estratégias acima têm em comum um fator essencial: todas dependem de visibilidade e dados confiáveis sobre a operação. Esse é o ponto de partida para qualquer processo de otimização sustentável.
        </p>
      </div>
    ),
  },
}

/* ─── Helpers ────────────────────────────────────────────────── */
const categoryVariant: Record<string, 'violet' | 'cyan' | 'magenta'> = {
  '4PL': 'violet',
  'Analytics': 'cyan',
  'Gestão': 'magenta',
}

/* ─── Metadata ───────────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return { title: 'Artigo não encontrado' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }))
}

/* ─── Page ───────────────────────────────────────────────────── */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) notFound()

  const allSlugs = Object.keys(POSTS)
  const related = allSlugs.filter((s) => s !== slug).slice(0, 2)

  return (
    <article className="pt-32 pb-20 bg-navy min-h-screen">
      <Container size="md">

        {/* Back */}
        <Link href="/conteudo/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Voltar para Blog
        </Link>

        {/* Header */}
        <SectionLabel className="mb-4">{post.category}</SectionLabel>
        <h1 className="font-display text-display-md text-white mt-4 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 mb-12 pb-8 border-b border-white/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-magenta flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <div>
            <p className="text-white text-sm font-medium">{post.author.name}</p>
            <p className="text-white/40 text-xs">{post.author.role}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-white/40 text-xs">
              {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
            <p className="text-white/30 text-xs mt-0.5">{post.readTime} min de leitura</p>
          </div>
        </div>

        {/* Body */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-display prose-headings:text-white prose-headings:font-semibold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-p:text-white/70 prose-p:leading-relaxed
          prose-strong:text-white prose-strong:font-semibold
          prose-ul:text-white/70 prose-li:my-1
          prose-blockquote:border-violet prose-blockquote:text-white/60 prose-blockquote:italic prose-blockquote:not-italic
          prose-blockquote:bg-white/5 prose-blockquote:rounded-xl prose-blockquote:px-6 prose-blockquote:py-4">
          {post.body}
        </div>

        {/* CTA */}
        <div className="mt-16 glass rounded-card p-8 text-center">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Transforme sua operação</p>
          <h3 className="font-display text-heading-md text-white mb-4">
            Quer colocar essas estratégias em prática?
          </h3>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            Fale com nossos especialistas e descubra como o modelo 4PL da Vendemmia pode ser aplicado na sua cadeia logística.
          </p>
          <Link
            href="/contato"
            className="btn-primary inline-flex"
          >
            Falar com um especialista
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-6">Continue lendo</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((s) => {
                const p = POSTS[s]
                return (
                  <Link key={s} href={`/conteudo/blog/${s}`} className="glass rounded-card p-5 hover:border-violet/30 transition-colors group">
                    <Badge variant={categoryVariant[p.category] ?? 'violet'} className="mb-3">{p.category}</Badge>
                    <h4 className="text-white font-medium text-sm group-hover:text-gradient transition-all leading-snug">{p.title}</h4>
                    <p className="text-white/30 text-xs mt-2">{p.readTime} min</p>
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
