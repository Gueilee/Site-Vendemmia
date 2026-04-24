import type { Metadata } from 'next'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactForm from '@/components/sections/shared/ContactForm'
import FadeUp from '@/components/animations/FadeUp'
import GlowBlob from '@/components/animations/GlowBlob'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com os especialistas da Vendemmia e descubra como podemos transformar sua operação logística.',
}

export default function ContatoPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-navy relative overflow-hidden bg-grid">
      <GlowBlob color="violet" size={600} className="-top-40 -left-40 opacity-50" />
      <GlowBlob color="magenta" size={400} className="bottom-0 right-0 opacity-30" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeUp>
            <SectionLabel className="mb-6">Fale conosco</SectionLabel>
            <h1 className="font-display text-display-md text-white mt-4 mb-6">
              Vamos transformar sua{' '}
              <span className="text-gradient">operação juntos</span>
            </h1>
            <p className="text-body-lg text-white/60 mb-10">
              Nossos especialistas em logística 4PL estão prontos para entender os desafios da sua cadeia e apresentar soluções personalizadas.
            </p>

            <div className="space-y-6">
              {[
                { icon: '📍', label: 'Matriz', value: 'Navegantes, SC — Brasil' },
                { icon: '📞', label: 'Telefone', value: '+55 (47) 3185-0100' },
                { icon: '✉️', label: 'Email', value: 'contato@vendemmia.com.br' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right */}
          <FadeUp delay={0.2}>
            <div className="glass rounded-card p-8">
              <h2 className="font-display text-heading-md text-white mb-6">Envie sua mensagem</h2>
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
