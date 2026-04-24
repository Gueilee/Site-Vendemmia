import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import CounterUp from '@/components/animations/CounterUp'

export const metadata: Metadata = {
  title: 'ESG — Inventário GEE 2024 | Vendemmia',
  description:
    'Inventário de Emissões de Gases de Efeito Estufa 2024 da Vendemmia, auditado pelo GHG Protocol Brasileiro. Neutralização total dos Escopos 1 e 2, energia solar e compromisso NET ZERO.',
}

/* ─────────── dados do PDF ─────────── */

const KEY_METRICS = [
  { value: 1258, suffix: '', prefix: '', unit: 'tCO₂e neutralizados', description: 'Escopos 1 e 2 100% compensados via créditos VERRA', color: '#01E18E', icon: '🌿' },
  { value: 7,   suffix: '',  prefix: '', unit: 'unidades operacionais', description: 'Todas incluídas no inventário — 100% de cobertura', color: '#422c76', icon: '🏭' },
  { value: 539, suffix: '',  prefix: '', unit: 'MWh solares previstos', description: 'Projeto de energia solar aprovado pela Celesc para Navegantes', color: '#ff2f69', icon: '☀️' },
  { value: 100, suffix: '%', prefix: '', unit: 'de escopos 1 e 2 offset', description: 'Neutralização total das emissões diretas via créditos de carbono VERRA', color: '#01E18E', icon: '🌿' },
]

const SCOPES = [
  {
    scope: 'Escopo 1',
    label: 'Emissões diretas',
    value: '1.228',
    unit: 'tCO₂e',
    pct: '0,008%',
    color: '#422c76',
    bgColor: 'rgba(66,44,118,0.06)',
    borderColor: 'rgba(66,44,118,0.2)',
    icon: '🚛',
    categories: [
      { name: 'Combustão móvel (frota)', value: '1.227,38 tCO₂e', pct: 99.9 },
      { name: 'Resíduos sólidos e efluentes', value: '0,85 tCO₂e', pct: 0.07 },
      { name: 'Emissões fugitivas', value: '0,06 tCO₂e', pct: 0.005 },
    ],
    note: '100% neutralizado via créditos de carbono VERRA',
  },
  {
    scope: 'Escopo 2',
    label: 'Emissões indiretas (energia)',
    value: '29,1',
    unit: 'tCO₂e',
    pct: '0,0002%',
    color: '#ff2f69',
    bgColor: 'rgba(255,47,105,0.05)',
    borderColor: 'rgba(255,47,105,0.2)',
    icon: '⚡',
    categories: [
      { name: 'Aquisição de energia elétrica', value: '29,11 tCO₂e', pct: 100 },
    ],
    note: '100% neutralizado via créditos de carbono VERRA',
  },
  {
    scope: 'Escopo 3',
    label: 'Emissões da cadeia de valor',
    value: '15.577.086',
    unit: 'tCO₂e',
    pct: '99,99%',
    color: '#01E18E',
    bgColor: 'rgba(1,225,142,0.05)',
    borderColor: 'rgba(1,225,142,0.2)',
    icon: '🌍',
    categories: [
      { name: 'Transporte & distribuição upstream (cat. 4)', value: '15.512.088 tCO₂e', pct: 99.6 },
      { name: 'Ativos arrendados — transporte contratado (cat. 8)', value: '64.968 tCO₂e', pct: 0.42 },
      { name: 'Deslocamento casa-trabalho (cat. 7)', value: '24,97 tCO₂e', pct: 0.0002 },
      { name: 'Viagens corporativas (cat. 6)', value: '5,10 tCO₂e', pct: 0.00003 },
    ],
    note: 'Emissões concentradas pela natureza de trading company — Vendemmia atua como mandatária operacional de ~30 empresas importadoras',
  },
]

const INITIATIVES = [
  {
    icon: '☀️',
    title: 'Energia Solar nas Unidades',
    description: 'Projeto aprovado pela Celesc Distribuição S.A. para instalação de painéis fotovoltaicos nas unidades CD 01 e CD 02 Navegantes, prevendo 539,136 MWh de autoprodução de energia limpa.',
    tag: 'Em implantação',
    tagColor: '#01E18E',
  },
  {
    icon: '🔋',
    title: 'Frotas Elétricas no Armazém',
    description: 'Investimento em empilhadeiras elétricas substituindo o consumo de GLP (gás liquefeito) nas unidades de Armazém Geral, reduzindo emissões diretas e custos operacionais.',
    tag: 'Em operação',
    tagColor: '#422c76',
  },
  {
    icon: '♻️',
    title: 'Gestão de Resíduos Seletiva',
    description: 'Programas de descarte seletivo de resíduos implementados nas unidades operacionais, com monitoramento e registro para composição do inventário GEE.',
    tag: 'Em operação',
    tagColor: '#422c76',
  },
  {
    icon: '🚗',
    title: 'Gestão Eficiente de Frotas',
    description: 'Gerenciamento otimizado de pneus e frotas, priorizando eficiência de combustível. No transporte marítimo, uso preferencial de grandes embarcações (>8.000 TEU) para redução do carbono por tonelada transportada.',
    tag: 'Em operação',
    tagColor: '#422c76',
  },
  {
    icon: '📊',
    title: 'Analytics de Carbono para Clientes',
    description: 'A plataforma Vendemmia Analytics oferece mensuração da pegada de carbono das operações dos clientes, com rastreamento de emissões de CO₂ em cada etapa logística e suporte à compra de créditos de carbono.',
    tag: 'Disponível',
    tagColor: '#ff2f69',
  },
  {
    icon: '📋',
    title: 'Plano de Descarbonização',
    description: 'Plano estruturado de descarbonização que promove a cultura de sustentabilidade corporativa, alinhado às melhores práticas internacionais e ao propósito e valores da Vendemmia.',
    tag: 'Em desenvolvimento',
    tagColor: '#ff6b96',
  },
]

const CERTIFICATIONS = [
  {
    date: 'Ago 2024',
    title: '528 VCUs Aposentados',
    project: 'Projeto Cikel — Amazon REDD APD',
    detail: 'Evitando Desmatamento Planejado na Amazônia Brasileira',
    standard: 'VERRA — Verified Carbon Standard',
    serial: '15718-713539641-713540168-VCS-VCU-261',
    color: '#01E18E',
  },
  {
    date: 'Mai 2025',
    title: '730 VCUs Aposentados',
    project: 'Projeto BAESA',
    detail: 'Geração de energia limpa e renovável',
    standard: 'VERRA — Verified Carbon Standard',
    serial: '10516-225659839-225660568-VCS-VCU-1491',
    color: '#422c76',
  },
]

const UNITS = [
  { name: 'Unidade Itajaí', state: 'SC' },
  { name: 'Unidade CD 01 Navegantes', state: 'SC' },
  { name: 'Unidade CD 02 Navegantes', state: 'SC' },
  { name: 'Unidade CD Itapevi', state: 'SP' },
  { name: 'Unidade Vila Olímpia', state: 'SP' },
  { name: 'Unidade Recife', state: 'PE' },
  { name: 'Unidade Pouso Alegre', state: 'MG' },
]

const COMMITMENTS = [
  { icon: '🌐', label: 'Pacto Global da ONU', detail: 'Signatária da Rede Brasil' },
  { icon: '🎯', label: 'Ambição NET ZERO', detail: 'Movimento da Rede Brasil do Pacto Global ONU' },
  { icon: '🌡️', label: 'ODS 13 — Ação pelo Clima', detail: 'Alinhado aos Objetivos de Desenvolvimento Sustentável' },
  { icon: '🤝', label: 'Acordo de Paris', detail: 'Comprometida com os objetivos climáticos globais' },
  { icon: '📜', label: 'GHG Protocol — PRATA 2024', detail: 'Inventário certificado pelo Programa Brasileiro GHG Protocol' },
  { icon: '✅', label: 'ISO 9001:2015', detail: 'Certificação de qualidade e gestão' },
]

/* ─────────── componentes auxiliares ─────────── */

function MetricCard({
  value, suffix, prefix, unit, description, color, icon
}: typeof KEY_METRICS[0]) {
  return (
    <div
      className="bg-white rounded-card p-6 border shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
      style={{ borderColor: `${color}25` }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        {icon}
      </div>
      <div className="font-display font-extrabold text-heading-xl leading-none mb-1" style={{ color }}>
        <CounterUp value={value} prefix={prefix} suffix={suffix} decimals={0} />
      </div>
      <p className="text-sm font-bold text-graphite uppercase tracking-wide mb-2">{unit}</p>
      <p className="text-graphite/50 text-xs leading-relaxed">{description}</p>
    </div>
  )
}

function ScopeBar({ pct, color }: { pct: number; color: string }) {
  const display = pct < 1 ? pct : Math.max(pct, 4)
  return (
    <div className="h-2 w-full bg-graphite/08 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000"
        style={{ width: `${display}%`, background: color }}
      />
    </div>
  )
}

export default function EsgPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        className="relative min-h-[65vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d2e1a 0%, #1a4a2e 40%, #422c76 100%)' }}
      >
        {/* Background texture */}
        <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(1,225,142,0.4) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(66,44,118,0.6) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

        {/* Hero image overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=700&fit=crop&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <Container className="relative z-10 py-28">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white/70 border border-white/15 bg-white/05 mb-6">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              Inventário GEE 2024 — GHG Protocol Brasileiro
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-display font-extrabold text-display-lg text-white leading-tight max-w-3xl">
              Logística responsável{' '}
              <span style={{
                background: 'linear-gradient(135deg, #01E18E, #33e9a5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                pelo clima
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-white/65 text-body-lg mt-6 max-w-2xl leading-relaxed">
              A Vendemmia publicou seu primeiro Inventário de Emissões de Gases de Efeito Estufa (GEE) em 2024,
              certificado pelo <strong className="text-white/90">Programa Brasileiro GHG Protocol</strong>. Escopos 1 e 2
              foram 100% neutralizados via créditos de carbono verificados VERRA.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { label: '✅ Escopos 1 e 2 neutralizados', c: '#01E18E' },
                { label: '🌐 Pacto Global ONU', c: '#b9a9e0' },
                { label: '🎯 Ambição NET ZERO', c: '#ff6b96' },
                { label: '📋 GHG Protocol PRATA 2024', c: '#01E18E' },
              ].map((b) => (
                <span
                  key={b.label}
                  className="px-4 py-2 rounded-full text-sm font-semibold border"
                  style={{ color: b.c, borderColor: `${b.c}40`, background: `${b.c}10` }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ── KEY METRICS ── */}
      <section className="py-section-md bg-cream relative">
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <FadeUp className="text-center mb-12">
            <SectionLabel className="mb-4">Números do Inventário</SectionLabel>
            <h2 className="font-display text-heading-xl text-graphite mt-4">
              Transparência em{' '}
              <span className="text-gradient">dados reais</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {KEY_METRICS.map((m, i) => (
              <FadeUp key={m.unit} delay={i * 0.08}>
                <MetricCard {...m} />
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ── EMISSÕES — VISÃO GERAL ── */}
      <section className="py-section-lg bg-white relative overflow-hidden">
        <Container>
          <FadeUp className="text-center mb-14">
            <SectionLabel className="mb-4">Emissões de GEE — 2024</SectionLabel>
            <h2 className="font-display text-heading-xl text-graphite mt-4">
              Inventário completo por{' '}
              <span className="text-gradient">escopo</span>
            </h2>
            <p className="text-graphite/55 text-body-lg mt-4 max-w-2xl mx-auto">
              Total de <strong className="text-graphite">15.578.343 tCO₂e</strong> inventariados seguindo os padrões
              do GHG Protocol, com abordagem de Controle Operacional.
            </p>
          </FadeUp>

          {/* Total bar */}
          <FadeUp className="mb-12">
            <div className="bg-white border border-brand/08 rounded-card p-8 shadow-card max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div>
                  <p className="text-label text-graphite/40 uppercase tracking-widest">Total de Emissões</p>
                  <p className="font-display font-extrabold text-heading-xl text-graphite mt-1">
                    15.578.343 <span className="text-graphite/40 text-heading-sm">tCO₂e</span>
                  </p>
                </div>
                <div className="flex gap-4 text-sm flex-wrap">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: '#422c76' }} /> Escopo 1</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: '#ff2f69' }} /> Escopo 2</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: '#01E18E' }} /> Escopo 3</span>
                </div>
              </div>
              {/* Stacked bar visual */}
              <div className="flex h-8 rounded-xl overflow-hidden gap-px">
                <div className="h-full rounded-l-xl" style={{ width: '0.01%', minWidth: 4, background: '#422c76' }} title="Escopo 1: 1.228 tCO₂e" />
                <div className="h-full" style={{ width: '0.001%', minWidth: 2, background: '#ff2f69' }} title="Escopo 2: 29 tCO₂e" />
                <div className="flex-1 h-full rounded-r-xl" style={{ background: 'linear-gradient(90deg, #01E18E, #00b570)' }} title="Escopo 3: 15.577.086 tCO₂e" />
              </div>
              <div className="mt-3 flex justify-between text-xs text-graphite/40">
                <span>Escopos 1+2 = 0,008%</span>
                <span>Escopo 3 = 99,99%</span>
              </div>
            </div>
          </FadeUp>

          {/* Scope cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SCOPES.map((s, i) => (
              <FadeUp key={s.scope} delay={i * 0.1}>
                <div
                  className="rounded-card p-7 border h-full flex flex-col"
                  style={{ background: s.bgColor, borderColor: s.borderColor }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ color: s.color, background: `${s.color}18`, border: `1px solid ${s.color}35` }}
                      >
                        {s.scope}
                      </span>
                      <p className="text-graphite/60 text-sm mt-2">{s.label}</p>
                    </div>
                    <span className="text-3xl">{s.icon}</span>
                  </div>

                  {/* Big number */}
                  <div className="mb-1">
                    <span className="font-display font-extrabold text-heading-lg text-graphite leading-none">{s.value}</span>
                    <span className="text-graphite/40 text-sm ml-1">{s.unit}</span>
                  </div>
                  <p className="text-xs font-semibold mb-6" style={{ color: s.color }}>{s.pct} do total</p>

                  {/* Category breakdown */}
                  <div className="space-y-3 flex-1">
                    {s.categories.map((cat) => (
                      <div key={cat.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-graphite/60 flex-1 pr-2 leading-snug">{cat.name}</span>
                          <span className="text-xs font-mono font-bold text-graphite shrink-0">{cat.value}</span>
                        </div>
                        <ScopeBar pct={cat.pct} color={s.color} />
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <div
                    className="mt-5 pt-5 border-t text-xs leading-relaxed"
                    style={{ borderColor: `${s.color}25`, color: s.color }}
                  >
                    ℹ️ {s.note}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Scope 3 context note */}
          <FadeUp delay={0.3} className="mt-8">
            <div className="bg-brand/04 border border-brand/12 rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-sm text-graphite/70 leading-relaxed">
                <strong className="text-graphite">Por que o Escopo 3 é tão alto?</strong>{' '}
                A Vendemmia atua como <em>trading company</em> e mandatária operacional de aproximadamente
                <strong className="text-graphite"> 30 empresas importadoras</strong>, sendo formalmente responsável
                por arranjar e contratar o transporte internacional de cargas. Por isso, as emissões de toda a cadeia
                logística upstream ficam sob o CNPJ da Vendemmia — emissões que, em teoria, deveriam ser distribuídas
                entre as 30 empresas clientes. Isso não representa ineficiência operacional, mas transparência e
                centralização conforme exige o GHG Protocol.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ── NEUTRALIZAÇÃO DE CARBONO ── */}
      <section
        className="py-section-lg relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d2e1a 0%, #1a3a2a 60%, #0a1a10 100%)' }}
      >
        <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(1,225,142,0.4) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

        <Container className="relative z-10">
          <FadeUp className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-mint/70 border border-mint/20 bg-mint/05 mb-6">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              Neutralização Verificada
            </div>
            <h2 className="font-display text-heading-xl text-white mt-4">
              Escopos 1 e 2{' '}
              <span style={{
                background: 'linear-gradient(135deg, #01E18E, #33e9a5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                100% neutralizados
              </span>
            </h2>
            <p className="text-white/55 text-body-lg mt-4 max-w-2xl mx-auto">
              A Vendemmia compensou integralmente as emissões diretas e indiretas de energia elétrica de 2024
              por meio de créditos de carbono verificados pelo padrão <strong className="text-white/80">VCS (VERRA)</strong>.
            </p>
          </FadeUp>

          {/* Total offset badge */}
          <FadeUp className="mb-12 flex justify-center">
            <div
              className="inline-flex flex-col items-center px-10 py-8 rounded-card border text-center"
              style={{ background: 'rgba(1,225,142,0.08)', borderColor: 'rgba(1,225,142,0.25)' }}
            >
              <span className="text-5xl mb-3">🌿</span>
              <p className="text-label text-white/40 uppercase tracking-widest mb-1">Total Compensado em 2024</p>
              <p className="font-display font-extrabold text-display-md" style={{
                background: 'linear-gradient(135deg, #01E18E, #33e9a5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                1.258 tCO₂e
              </p>
              <p className="text-white/40 text-sm mt-2">528 (1º sem.) + 730 (2º sem.) = neutralização anual completa</p>
            </div>
          </FadeUp>

          {/* Certification cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert, i) => (
              <FadeUp key={cert.serial} delay={i * 0.12}>
                <div
                  className="rounded-card p-6 border"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: `${cert.color}30` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ color: cert.color, background: `${cert.color}18`, border: `1px solid ${cert.color}35` }}
                      >
                        {cert.date}
                      </span>
                    </div>
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="font-display font-bold text-heading-sm text-white mb-1">{cert.title}</h3>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: cert.color }}>{cert.project}</p>
                  <p className="text-white/50 text-sm mb-4">{cert.detail}</p>
                  <div className="pt-4 border-t space-y-1" style={{ borderColor: `${cert.color}20` }}>
                    <p className="text-xs text-white/35"><span className="text-white/50 font-semibold">Padrão:</span> {cert.standard}</p>
                    <p className="text-xs text-white/30 font-mono break-all">Serial: {cert.serial}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ── INICIATIVAS AMBIENTAIS ── */}
      <section className="py-section-lg bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <FadeUp className="text-center mb-14">
            <SectionLabel className="mb-4">Ações e Iniciativas</SectionLabel>
            <h2 className="font-display text-heading-xl text-graphite mt-4">
              O que estamos{' '}
              <span className="text-gradient">fazendo agora</span>
            </h2>
            <p className="text-graphite/55 text-body-lg mt-4 max-w-2xl mx-auto">
              Ações concretas de redução de emissões e promoção da sustentabilidade em toda a operação.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INITIATIVES.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="bg-white rounded-card p-6 border border-brand/08 shadow-card hover:shadow-card-hover hover:border-brand/18 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${item.tagColor}12`, border: `1px solid ${item.tagColor}25` }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ color: item.tagColor, background: `${item.tagColor}12`, border: `1px solid ${item.tagColor}25` }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-heading-sm text-graphite mb-2">{item.title}</h3>
                  <p className="text-graphite/55 text-sm leading-relaxed flex-1">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Solar image */}
          <FadeUp delay={0.3} className="mt-10">
            <div className="relative rounded-card-lg overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=400&fit=crop&q=80"
                alt="Painéis solares — energia renovável Vendemmia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand/80 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-10">
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Energia renovável</p>
                  <p className="font-display font-bold text-heading-md text-white">539 MWh solares previstos</p>
                  <p className="text-white/60 text-sm mt-2 max-w-md">
                    Projeto aprovado pela Celesc para as unidades CD 01 e CD 02 de Navegantes/SC
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ── COMPROMISSOS GLOBAIS ── */}
      <section className="py-section-lg bg-white relative overflow-hidden">
        <Container>
          <FadeUp className="text-center mb-14">
            <SectionLabel className="mb-4">Compromissos Globais</SectionLabel>
            <h2 className="font-display text-heading-xl text-graphite mt-4">
              Alinhados com o{' '}
              <span className="text-gradient">futuro do planeta</span>
            </h2>
            <p className="text-graphite/55 text-body-lg mt-4 max-w-2xl mx-auto">
              A Vendemmia integra os principais compromissos internacionais de clima e sustentabilidade corporativa.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {COMMITMENTS.map((c, i) => (
              <FadeUp key={c.label} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-5 border border-brand/08 shadow-card hover:border-brand/20 transition-all duration-300 flex items-start gap-3">
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-bold text-graphite text-sm">{c.label}</p>
                    <p className="text-graphite/50 text-xs mt-0.5 leading-relaxed">{c.detail}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Net Zero banner */}
          <FadeUp delay={0.3}>
            <div
              className="rounded-card-lg p-8 md:p-12 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #422c76, #ff2f69)' }}
            >
              <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-5xl block mb-4">🎯</span>
                <h3 className="font-display font-bold text-heading-lg text-white mb-3">
                  Ambição NET ZERO
                </h3>
                <p className="text-white/65 text-body-lg max-w-2xl mx-auto mb-6">
                  A Vendemmia está comprometida com o Movimento Ambição NET ZERO do Pacto Global da ONU — Rede Brasil,
                  alinhado ao ODS 13 (Ação pelo Clima) e aos objetivos do Acordo de Paris. Estamos desenvolvendo
                  nosso Plano Estratégico ESG para estabelecer metas baseadas em ciência.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['ODS 13 — Ação pelo Clima', 'Acordo de Paris', 'Pacto Global ONU', 'Net Zero'].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/25 bg-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ── METODOLOGIA ── */}
      <section className="py-section-md bg-cream-mid relative">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <SectionLabel className="mb-6">Metodologia</SectionLabel>
              <h2 className="font-display text-heading-xl text-graphite mb-6">
                Padrão internacional{' '}
                <span className="text-gradient">reconhecido</span>
              </h2>
              <p className="text-graphite/60 text-body-lg leading-relaxed mb-6">
                O inventário segue o <strong className="text-graphite">Programa Brasileiro GHG Protocol</strong>,
                referência global para mensuração e gestão de emissões de GEE, com abordagem de
                <strong className="text-graphite"> Controle Operacional</strong>.
              </p>
              <ul className="space-y-3">
                {[
                  'Ano-base: 2024 (primeiro inventário)',
                  'Tipo: Inventário Completo',
                  'Verificação: Programa Brasileiro GHG Protocol — PRATA 2024',
                  'Abordagem de consolidação: Controle Operacional',
                  'Gases reportados: CO₂, CH₄, N₂O, HFC',
                  'Fatores de emissão: Padrão GHG Protocol Brasil',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-graphite/70 text-sm">
                    <span className="text-mint mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.15}>
              {/* Operational units */}
              <div className="bg-white rounded-card p-7 border border-brand/08 shadow-card">
                <p className="text-label text-graphite/40 uppercase tracking-widest mb-5">
                  7 Unidades Operacionais — 100% incluídas
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {UNITS.map((unit) => (
                    <div
                      key={unit.name}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-cream border border-brand/06"
                    >
                      <span className="text-lg">🏭</span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-graphite truncate">{unit.name}</p>
                        <p className="text-xs text-graphite/40">{unit.state}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-graphite/40 mt-4 text-center">
                  Todas as unidades são 100% controladas pela Vendemmia
                </p>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ── ANALYTICS ESG ── */}
      <section
        className="py-section-lg relative overflow-hidden"
        style={{ background: '#422c76' }}
      >
        <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,47,105,0.4) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="section-label section-label-dark mb-6">Analytics de Carbono</span>
              <h2 className="font-display font-bold text-heading-xl text-white mt-6 mb-5">
                Meça a pegada de carbono{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #b9a9e0, #ff6b96)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  da sua operação
                </span>
              </h2>
              <p className="text-white/60 text-body-lg leading-relaxed mb-8">
                A plataforma <strong className="text-white">Vendemmia Analytics</strong> oferece rastreamento
                das emissões de CO₂ em cada etapa logística — importação, armazenagem e transporte —
                apoiando decisões sustentáveis e a possibilidade de compensação via compra de créditos de carbono.
              </p>
              <a
                href="/solucoes/analytics"
                className="inline-flex items-center gap-2.5 font-bold text-brand rounded-full px-7 py-3.5 text-sm transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'white', boxShadow: '0 8px 40px rgba(0,0,0,0.25)' }}
              >
                Conhecer o Analytics
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📊', title: 'Dashboard de CO₂', desc: 'Visualize emissões por etapa logística em tempo real' },
                  { icon: '🔗', title: 'Integração Total', desc: 'Conecta importação, armazém e transporte em uma plataforma' },
                  { icon: '💳', title: 'Créditos de Carbono', desc: 'Compense emissões via parceiros certificados VERRA' },
                  { icon: '📋', title: 'Relatórios ESG', desc: 'Relatórios prontos para clientes e stakeholders' },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-250"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    <span className="text-2xl block mb-3">{f.icon}</span>
                    <p className="font-bold text-white text-sm mb-1">{f.title}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-section-lg bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
        <Container className="relative z-10">
          <FadeUp className="max-w-3xl mx-auto text-center">
            <SectionLabel className="mb-4">ESG como diferencial</SectionLabel>
            <h2 className="font-display font-extrabold text-heading-xl text-graphite mt-6">
              Sustentabilidade que{' '}
              <span className="text-gradient">gera valor</span>
            </h2>
            <p className="text-graphite/55 text-body-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Parceiros que escolhem a Vendemmia ganham rastreabilidade ambiental da operação logística
              e acesso à plataforma de gestão de carbono. Logística eficiente e responsável.
            </p>
            <div className="flex gap-4 justify-center mt-10 flex-wrap">
              <a
                href="/contato"
                className="btn-primary"
              >
                Falar com especialista ESG
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/solucoes/analytics"
                className="btn-secondary"
              >
                Ver o Analytics
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {['GHG Protocol PRATA 2024', 'VERRA Certified', 'ISO 9001', 'Pacto Global ONU', 'Ambição NET ZERO'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-graphite/60 border border-brand/12 bg-white"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeUp>
        </Container>
      </section>

    </main>
  )
}
