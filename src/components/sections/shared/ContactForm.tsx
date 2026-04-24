'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ─── Schema ──────────────────────────────────────────────────── */
const schema = z.object({
  nome:        z.string().min(2, 'Nome muito curto'),
  sobrenome:   z.string().min(2, 'Sobrenome muito curto'),
  email:       z.string().email('Email inválido'),
  telefone:    z.string().min(10, 'Telefone inválido'),
  empresa:     z.string().min(2, 'Empresa obrigatória'),
  assunto:     z.enum(['analytics', 'importacao', 'armazenagem', 'transporte', 'parceria', 'outro']),
  mensagem:    z.string().min(20, 'Mensagem muito curta (mínimo 20 caracteres)'),
  privacidade: z.literal(true, { message: 'Aceite a política para continuar' }),
})

type FormData = z.infer<typeof schema>

const ASSUNTOS = [
  { value: 'analytics',   label: 'Analytics by Vendemmia' },
  { value: 'importacao',  label: 'Importação' },
  { value: 'armazenagem', label: 'Armazenagem' },
  { value: 'transporte',  label: 'Transporte' },
  { value: 'parceria',    label: 'Quero uma parceria' },
  { value: 'outro',       label: 'Outro assunto' },
]

/* ─── Field helpers ───────────────────────────────────────────── */
const fieldBase =
  'w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-white/30 text-sm focus:outline-none transition-all duration-200'

const fieldIdle = 'border-white/10 focus:border-violet/50 focus:bg-white/8'
const fieldError = 'border-red-500/50 focus:border-red-500'

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="text-xs text-red-400 mt-1">{msg}</p> : null
}

interface ContactFormProps {
  title?: string
  subtitle?: string
  compact?: boolean
}

/* ─── Success screen ──────────────────────────────────────────── */
function Success({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass rounded-card p-10 text-center"
    >
      <div className="relative inline-flex mb-6">
        <div className="w-16 h-16 rounded-full bg-green-neon/15 border border-green-neon/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-neon animate-ping opacity-60" />
      </div>
      <h3 className="text-xl font-display font-semibold text-white mb-2">Mensagem enviada!</h3>
      <p className="text-white/60 text-sm mb-6">Nossa equipe entrará em contato em breve.</p>
      <button onClick={onReset} className="btn-secondary !py-2 !px-5 !text-sm">
        Enviar outra mensagem
      </button>
    </motion.div>
  )
}

/* ─── Main component ──────────────────────────────────────────── */
export default function ContactForm({ title, subtitle, compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return <Success onReset={() => { reset(); setSubmitted(false) }} />
  }

  return (
    <div className={cn('glass rounded-card', compact ? 'p-6' : 'p-8 lg:p-12')}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && <h2 className="font-display text-heading-md text-white">{title}</h2>}
          {subtitle && <p className="text-white/60 text-sm mt-2">{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">

        {/* Nome + Sobrenome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-white/70 block mb-1.5">Nome *</label>
            <input
              placeholder="João"
              className={cn(fieldBase, errors.nome ? fieldError : fieldIdle)}
              {...register('nome')}
            />
            <FieldError msg={errors.nome?.message} />
          </div>
          <div>
            <label className="text-sm font-medium text-white/70 block mb-1.5">Sobrenome *</label>
            <input
              placeholder="Silva"
              className={cn(fieldBase, errors.sobrenome ? fieldError : fieldIdle)}
              {...register('sobrenome')}
            />
            <FieldError msg={errors.sobrenome?.message} />
          </div>
        </div>

        {/* Email + Telefone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-white/70 block mb-1.5">Email *</label>
            <input
              type="email"
              placeholder="joao@empresa.com"
              className={cn(fieldBase, errors.email ? fieldError : fieldIdle)}
              {...register('email')}
            />
            <FieldError msg={errors.email?.message} />
          </div>
          <div>
            <label className="text-sm font-medium text-white/70 block mb-1.5">Telefone *</label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              className={cn(fieldBase, errors.telefone ? fieldError : fieldIdle)}
              {...register('telefone')}
            />
            <FieldError msg={errors.telefone?.message} />
          </div>
        </div>

        {/* Empresa */}
        <div>
          <label className="text-sm font-medium text-white/70 block mb-1.5">Empresa *</label>
          <input
            placeholder="Nome da sua empresa"
            className={cn(fieldBase, errors.empresa ? fieldError : fieldIdle)}
            {...register('empresa')}
          />
          <FieldError msg={errors.empresa?.message} />
        </div>

        {/* Assunto */}
        <div>
          <label className="text-sm font-medium text-white/70 block mb-1.5">Assunto *</label>
          <select
            className={cn(
              fieldBase, '!appearance-none',
              errors.assunto ? fieldError : fieldIdle
            )}
            defaultValue=""
            {...register('assunto')}
          >
            <option value="" disabled className="bg-navy-mid">Selecione o assunto</option>
            {ASSUNTOS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-navy-mid">
                {opt.label}
              </option>
            ))}
          </select>
          <FieldError msg={errors.assunto?.message} />
        </div>

        {/* Mensagem */}
        <div>
          <label className="text-sm font-medium text-white/70 block mb-1.5">Mensagem *</label>
          <textarea
            rows={compact ? 3 : 5}
            placeholder="Como podemos ajudar a sua empresa?"
            className={cn(fieldBase, 'resize-none', errors.mensagem ? fieldError : fieldIdle)}
            style={{ minHeight: 120 }}
            {...register('mensagem')}
          />
          <FieldError msg={errors.mensagem?.message} />
        </div>

        {/* Privacidade */}
        <div className="flex items-start gap-3">
          <input
            id="privacidade"
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded accent-violet"
            {...register('privacidade')}
          />
          <label htmlFor="privacidade" className="text-sm text-white/60">
            Li e aceito a{' '}
            <a href="/politica-de-privacidade" target="_blank" className="text-violet-light hover:text-white underline transition-colors">
              política de privacidade
            </a>
          </label>
        </div>
        <FieldError msg={errors.privacidade?.message} />

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center mt-2"
        >
          {isSubmitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando…
            </>
          ) : (
            <>
              Enviar mensagem
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
