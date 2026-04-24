export const NAV_LINKS = [
  {
    label: 'Soluções',
    href: '/solucoes',
    children: [
      { label: 'Importação',             href: '/solucoes/importacao',   description: 'Gestão 4PL ponta a ponta',              icon: '🚢' },
      { label: 'Armazém',                href: '/solucoes/armazenagem',  description: 'RFID, WMS e tecnologia de ponta',        icon: '🏭' },
      { label: 'Transportes',            href: '/solucoes/transportes',  description: 'TMS, rastreio e roteirização',           icon: '🚛' },
      { label: 'Analytics by Vendemmia', href: '/solucoes/analytics',    description: 'Visibilidade logística em tempo real',   icon: '📊' },
    ],
  },
  {
    label: 'Sobre nós',
    href: '/sobre',
    children: [
      { label: 'Quem Somos', href: '/sobre/quem-somos',          description: 'Nossa história e propósito',  icon: '🏢' },
      { label: 'ESG',        href: '/sobre/esg',                 description: 'Compromisso com o planeta',   icon: '🌱' },
      { label: 'Carreiras',  href: 'https://vendemmia.gupy.io',  description: 'Trabalhe conosco',            icon: '👥', external: true },
    ],
  },
  {
    label: 'Conteúdo',
    href: '/conteudo',
    children: [
      { label: 'Blog e Artigos',    href: '/conteudo/blog',     description: 'Tendências em logística', icon: '📝' },
      { label: 'Cases de Sucesso',  href: '/conteudo/cases',    description: 'Resultados reais',        icon: '🏆' },
      { label: 'Vídeos e Webinars', href: '/conteudo/videos',   description: 'Conteúdo audiovisual',    icon: '🎥' },
      { label: 'Podcast',           href: '/conteudo/podcast',  description: 'Logística 4PL em áudio', icon: '🎙️' },
      { label: 'FAQ',               href: '/conteudo/faq',      description: 'Dúvidas frequentes',     icon: '❓' },
    ],
  },
]

export const CLIENT_LOGOS = [
  { name: 'Bridgestone', src: '/images/clients/bridgestone.svg' },
  { name: 'Cargill',     src: '/images/clients/cargill.svg' },
  { name: 'Ricoh',       src: '/images/clients/ricoh.svg' },
  { name: 'Roland',      src: '/images/clients/roland.svg' },
  { name: 'NEC',         src: '/images/clients/nec.svg' },
  { name: 'Motul',       src: '/images/clients/motul.svg' },
  { name: 'Wirlpool',    src: '/images/clients/wirlpool.svg' },
  { name: 'SABIC',       src: '/images/clients/sabic.svg' },
  { name: 'Raízen',      src: '/images/clients/raizen.svg' },
  { name: 'Oxford',      src: '/images/clients/oxford.svg' },
  { name: 'ASSA ABLOY',  src: '/images/clients/assa-abloy.svg' },
  { name: 'Coloplast',   src: '/images/clients/coloplast.svg' },
  { name: 'Kraton',      src: '/images/clients/kraton.svg' },
  { name: 'KION Group',  src: '/images/clients/kion-group.svg' },
  { name: 'Perstorp',    src: '/images/clients/perstorp.svg' },
]

export const TESTIMONIALS = [
  {
    quote: 'Uma das vantagens do Analytics que temos aproveitado é a possibilidade dos nossos clientes acessarem a tecnologia de onde estiverem. Temos desenvolvido projetos para integrar os clientes, que conseguem ver a logística de ponta a ponta.',
    author: 'Diretor de Logística',
    company: 'Motul',
    logo: '/images/clients/motul.svg',
  },
  {
    quote: 'A Vendemmia abriu as portas para uma transformação conosco, e nossa redução de custos em inventário já chegou a 40%. Um time muito bem treinado e capacitado, que tornou tudo muito fácil. Saíamos das reuniões sempre com soluções.',
    author: 'Gerente de Supply Chain',
    company: 'NEC',
    logo: '/images/clients/nec.svg',
  },
  {
    quote: 'A Vendemmia entende onde você está e onde você quer chegar. Uma parceria precisa te apoiar nisso, pensar em soluções e estar aberta a ouvir contribuições.',
    author: 'Head de Operações',
    company: 'Roland',
    logo: '/images/clients/roland.svg',
  },
]

export const IMPACT_NUMBERS = [
  { value: 14,    suffix: '+',   label: 'Anos de experiência',        prefix: '',    mono: true },
  { value: 2.4,   suffix: 'B+',  label: 'Volume de negócios anual',   prefix: 'R$',  mono: true },
  { value: 200,   suffix: '+',   label: 'Clientes de grande porte',   prefix: '',    mono: true },
  { value: 15,    suffix: 'M+',  label: 'Itens movimentados por ano', prefix: '',    mono: true },
  { value: 50,    suffix: 'K+',  label: 'CTEs processados por ano',   prefix: '',    mono: true },
]

export const TIMELINE = [
  { year: 2011, title: 'Fundação',          description: 'Nasce a Vendemmia com foco em importação.' },
  { year: 2016, title: 'Verticalização',    description: 'Abertura do armazém em Navegantes (SC) e filial em Recife (PE).' },
  { year: 2017, title: 'Certificações',     description: 'ISO 9001/2015, auditoria Ernst & Young, implantação de WMS e RFID.' },
  { year: 2018, title: 'Transportes',       description: 'Início das operações de transporte rodoviário.' },
  { year: 2019, title: 'Marca Histórica',   description: 'R$ 2,4 bilhões movimentados e abertura em Minas Gerais.' },
  { year: 2020, title: 'Marca Única',       description: 'Vendemmia Logística Integrada — modelo 4PL full service.' },
  { year: 2021, title: 'Expansão Tech',     description: 'Armazém em Itapevi SP e lançamento do Vendemmia Analytics.' },
  { year: 2022, title: 'Segunda Unidade SC',description: 'Abertura da segunda unidade de armazém em Santa Catarina.' },
  { year: 2023, title: 'Ampliação SP',      description: '+5.500 m² na unidade de Itapevi, São Paulo.' },
  { year: 2024, title: 'Modernização',      description: '+11.000 m² em Navegantes, renovação da frota, certificação SASSMAQ.' },
  { year: 2025, title: 'Novo Armazém',      description: 'Inauguração em Garuva (SC) — 16.000 m² estratégicos.' },
]

export const SOLUTIONS = [
  {
    id: 'importacao',
    title: 'Importação',
    description: 'Gestão ponta a ponta desde a origem, com segurança, previsibilidade e eficiência global.',
    href: '/solucoes/importacao',
    icon: '🚢',
    color: 'cyan',
    tags: ['BPO', 'CRO', 'Consultoria', '4PL'],
    gradient: 'from-cyan-500/20 to-violet/20',
  },
  {
    id: 'armazenagem',
    title: 'Armazém',
    description: 'Estruturas próprias com RFID, WMS e tecnologia que une cuidado e eficiência.',
    href: '/solucoes/armazenagem',
    icon: '🏭',
    color: 'violet',
    tags: ['WMS', 'RFID', 'YMS', 'ISO 9001'],
    gradient: 'from-violet/20 to-violet-light/20',
  },
  {
    id: 'transportes',
    title: 'Transportes',
    description: 'Rotas estratégicas com rastreamento em tempo real e gestão de frotas inteligente.',
    href: '/solucoes/transportes',
    icon: '🚛',
    color: 'magenta',
    tags: ['TMS', 'App Motor', 'Frota', 'Rastreio'],
    gradient: 'from-magenta/20 to-violet/20',
  },
  {
    id: 'analytics',
    title: 'Analytics by Vendemmia',
    description: 'Plataforma tecnológica exclusiva para visibilidade e controle de toda a cadeia logística.',
    href: '/solucoes/analytics',
    icon: '📊',
    color: 'green',
    tags: ['IA', 'Real-time', 'Dashboards', 'API'],
    gradient: 'from-green-neon/20 to-cyan/20',
    featured: true,
  },
]

export const FOUR_PL_TABS = [
  {
    id: 'orquestracao',
    title: 'Orquestração Total',
    description: 'Ao contrário dos 3PLs, que atuam em funções isoladas, um 4PL supervisiona toda a cadeia de suprimentos — da importação à distribuição final. Resolvemos a exclusão digital e os sistemas desconectados que impedem 83% dos executivos de atingir o potencial da sua tecnologia.',
    stat: { value: '83%', label: 'dos executivos relatam que sua tecnologia não atingiu todo o potencial' },
  },
  {
    id: 'visibilidade',
    title: 'Visibilidade em Tempo Real',
    description: 'Através do Analytics, proporcionamos visibilidade unificada e controle de dados de ponta a ponta. As empresas respondem rapidamente a interrupções, identificam problemas antes que aconteçam e preveem desafios futuros com precisão.',
    stat: { value: '100%', label: 'de visibilidade sobre cada etapa da operação' },
  },
  {
    id: 'ia-dados',
    title: 'IA & Dados',
    description: 'Utilizamos análise avançada, Inteligência Artificial (IA) e Machine Learning para previsão e otimização de recursos. Fornecemos dados como serviço, refinando big data para melhorar múltiplos resultados de negócio.',
    stat: { value: '40%', label: 'de redução de custos alcançada por clientes como NEC' },
  },
  {
    id: 'custo',
    title: 'Redução de Custos',
    description: 'A operação 4PL via Vendemmia reduz custos operacionais e aumenta a eficiência. Automação de processos, otimização de redes e gestão inteligente de dados levam a ganhos práticos em velocidade, serviço e competitividade.',
    stat: { value: '+14', label: 'anos otimizando cadeias logísticas no Brasil e no mundo' },
  },
]
