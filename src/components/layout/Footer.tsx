'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'

const FOOTER_COLS = [
  {
    title: 'Soluções',
    links: [
      { label: 'Importação',             href: '/solucoes/importacao' },
      { label: 'Armazém',                href: '/solucoes/armazenagem' },
      { label: 'Transportes',            href: '/solucoes/transportes' },
      { label: 'Analytics by Vendemmia', href: '/solucoes/analytics' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Quem Somos', href: '/sobre/quem-somos' },
      { label: 'ESG',        href: '/sobre/esg' },
      { label: 'Carreiras',  href: 'https://vendemmia.gupy.io', external: true },
      { label: 'Contato',    href: '/contato' },
    ],
  },
  {
    title: 'Conteúdo',
    links: [
      { label: 'Blog e Artigos',    href: '/conteudo/blog' },
      { label: 'Cases de Sucesso',  href: '/conteudo/cases' },
      { label: 'Vídeos e Webinars', href: '/conteudo/videos' },
      { label: 'Podcast',           href: '/conteudo/podcast' },
      { label: 'FAQ',               href: '/conteudo/faq' },
    ],
  },
]

const SOCIALS = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/vendemmia', icon: 'in' },
  { label: 'Instagram', href: 'https://instagram.com/vendemmia',        icon: '⬡' },
  { label: 'YouTube',   href: 'https://youtube.com/@vendemmia',         icon: '▶' },
  { label: 'Facebook',  href: 'https://facebook.com/vendemmia',         icon: 'f' },
]

function SocialIcon({ label, href, icon }: { label: string; href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl border border-brand/10 flex items-center justify-center text-graphite/40 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all duration-200 text-xs font-mono font-bold"
    >
      {icon}
    </a>
  )
}

function NewsletterForm() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="rounded-card border border-brand/08 bg-brand/[0.03] p-6 mb-14 flex flex-col md:flex-row items-center justify-between gap-5">
      <div>
        <p className="font-bold text-graphite">Fique por dentro da logística</p>
        <p className="text-graphite/55 text-sm mt-1">
          Conteúdo sobre inovação, supply chain e tecnologia.
        </p>
      </div>
      {status === 'success' ? (
        <p className="text-mint font-semibold text-sm whitespace-nowrap flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-mint/15 flex items-center justify-center text-xs">✓</span>
          Inscrito! Obrigado.
        </p>
      ) : (
        <form onSubmit={submit} className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com.br"
            className="flex-1 md:w-60 px-4 py-2.5 rounded-xl bg-white border border-brand/10 text-graphite placeholder:text-graphite/30 text-sm focus:outline-none focus:border-brand/30 transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary !py-2.5 !px-5 !text-sm whitespace-nowrap"
          >
            {status === 'loading' ? '...' : 'Inscrever →'}
          </button>
        </form>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-cream-mid border-t border-brand/08 pt-20 pb-8">
      <Container>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image src="/images/logo-vendemmia.png" alt="Vendemmia" width={160} height={40} className="h-10 w-auto" />
            </Link>

            <p className="text-graphite/55 text-sm max-w-xs leading-relaxed">
              Diminuindo distâncias através das conexões humanas.
              Logística 4PL integrada do Brasil para o mundo.
            </p>

            <div className="flex gap-2.5 mt-6">
              {SOCIALS.map((s) => <SocialIcon key={s.label} {...s} />)}
            </div>

            <div className="flex items-center gap-2.5 mt-6 flex-wrap">
              {['ISO 9001', 'SASSMAQ'].map((seal) => (
                <div
                  key={seal}
                  className="px-3 py-1.5 rounded-lg border border-brand/10 bg-white text-xs font-mono text-graphite/40"
                >
                  {seal}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-graphite font-bold text-xs uppercase tracking-widest mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-graphite/50 hover:text-brand text-sm transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <span className="text-graphite/25 text-xs">↗</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <NewsletterForm />

        <div className="border-t border-brand/08 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-graphite/40 text-sm">
            © {new Date().getFullYear()} Vendemmia Logística Integrada. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-graphite/40 text-sm hover:text-graphite/70 transition-colors"
            >
              Política de Privacidade
            </Link>
            <span className="text-graphite/40 text-sm">
              Feito por Vendemmia
            </span>
          </div>
        </div>

      </Container>
    </footer>
  )
}
