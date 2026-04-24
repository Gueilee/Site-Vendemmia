'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Metadata } from 'next'
import PageHero from '@/components/sections/shared/PageHero'
import Container from '@/components/layout/Container'
import FadeUp from '@/components/animations/FadeUp'

const FAQS = [
  { q: 'O que é um operador 4PL?', a: 'Um 4PL (Fourth-Party Logistics) é um integrador da cadeia de suprimentos que gerencia, de forma estratégica, todos os recursos, capacidades e tecnologias da operação logística. Diferente do 3PL, o 4PL supervisiona toda a cadeia, incluindo outros provedores logísticos.' },
  { q: 'Quais tipos de empresa se beneficiam do modelo 4PL?', a: 'Empresas de médio e grande porte com cadeias de suprimentos complexas, especialmente aquelas que importam, têm múltiplos armazéns ou distribuição nacional e precisam de visibilidade integrada.' },
  { q: 'O Analytics by Vendemmia funciona com meu ERP atual?', a: 'Sim. O Analytics possui APIs de integração com os principais ERPs do mercado (SAP, TOTVS, Oracle, entre outros). Nossa equipe de TI realiza a integração e garante a sincronização de dados.' },
  { q: 'A Vendemmia tem estrutura em todo o Brasil?', a: 'Temos unidades em Santa Catarina (Navegantes e Garuva), São Paulo (Itapevi) e filial em Recife (PE), além de operações de transporte em todo o território nacional.' },
  { q: 'Qual o prazo para iniciar uma operação?', a: 'Depende da complexidade da operação. Projetos de consultoria ou analytics podem iniciar em semanas. Operações completas 4PL são estruturadas em projetos com cronogramas definidos na proposta.' },
  { q: 'Como é feito o acompanhamento da operação?', a: 'Através do Analytics by Vendemmia, o cliente tem acesso a dashboards em tempo real, relatórios automáticos e reuniões periódicas de alinhamento com o nosso time de gestão.' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-medium">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-violet-light text-2xl shrink-0 leading-none">+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-white/60 pb-5 text-body-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Dúvidas"
        titleHighlight="frequentes"
        description="Respostas para as perguntas mais comuns sobre a Vendemmia e o modelo 4PL."
      />
      <section className="py-section-lg bg-navy">
        <Container size="md">
          <FadeUp>
            <div className="glass rounded-card p-8">
              {FAQS.map((faq) => <FaqItem key={faq.q} {...faq} />)}
            </div>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
