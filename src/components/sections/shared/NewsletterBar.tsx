'use client'

import { useState } from 'react'
import { z } from 'zod'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'

const emailSchema = z.string().email()

interface NewsletterBarProps {
  inline?: boolean
}

export default function NewsletterBar({ inline = false }: NewsletterBarProps) {
  const [email, setEmail]           = useState('')
  const [status, setStatus]         = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [validationError, setValidationError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError('')
    const result = emailSchema.safeParse(email)
    if (!result.success) { setValidationError('Email inválido'); return }
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

  const inner = (
    <div className="bg-white rounded-2xl border border-brand/08 p-7 md:p-10 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 text-center md:text-left">
        <p className="text-label text-brand uppercase tracking-widest mb-1 font-bold">Newsletter</p>
        <h3 className="font-display font-bold text-heading-md text-graphite">
          Tendências em logística 4PL
        </h3>
        <p className="text-graphite/55 text-sm mt-2 max-w-md">
          Insights sobre supply chain, tecnologia e cases de sucesso — direto no seu email.
        </p>
      </div>

      <div className="w-full md:w-auto shrink-0">
        {status === 'success' ? (
          <p className="text-mint font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Inscrito! Obrigado.
          </p>
        ) : (
          <form onSubmit={submit} className="flex gap-2">
            <div className="flex flex-col">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setValidationError('') }}
                placeholder="seu@email.com.br"
                className="w-60 px-4 py-3 rounded-xl bg-cream border border-brand/10 text-graphite placeholder:text-graphite/30 text-sm focus:outline-none focus:border-brand/30 transition-colors"
              />
              {validationError && <p className="text-xs text-magenta mt-1">{validationError}</p>}
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary !py-3 !px-5 !text-sm whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Inscrever →'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-magenta text-xs mt-2">Erro ao inscrever. Tente novamente.</p>
        )}
      </div>
    </div>
  )

  if (inline) return inner

  return (
    <section className="py-section-md bg-cream">
      <Container>
        <FadeUp>{inner}</FadeUp>
      </Container>
    </section>
  )
}
