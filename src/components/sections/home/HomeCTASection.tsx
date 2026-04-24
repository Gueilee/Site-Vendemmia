import Container from '@/components/layout/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import FadeUp from '@/components/animations/FadeUp'
import NewsletterBar from '@/components/sections/shared/NewsletterBar'

const CONTACT_CARDS = [
  { icon: '📧', label: 'E-mail',   value: 'comercial@vendemmia.com.br', href: 'mailto:comercial@vendemmia.com.br' },
  { icon: '📞', label: 'Telefone', value: '+55 47 3370-5800',           href: 'tel:+554733705800' },
  { icon: '💼', label: 'LinkedIn', value: 'Vendemmia',                  href: 'https://linkedin.com/company/vendemmia', external: true },
]

export default function HomeCTASection() {
  return (
    <section className="py-section-xl bg-cream relative overflow-hidden">
      {/* Decorative top divider */}
      <div className="absolute top-0 left-0 right-0 divider-brand" />

      <div className="absolute inset-0 bg-dots opacity-70 pointer-events-none" />

      <Container className="relative z-10">
        {/* Main CTA */}
        <FadeUp className="max-w-3xl mx-auto text-center">
          <SectionLabel className="mb-4">Comece agora</SectionLabel>
          <h2 className="font-display font-extrabold text-display-md text-graphite mt-6">
            Pronto para transformar sua logística?
            <br />
            <span className="text-gradient">A Vendemmia está aqui.</span>
          </h2>
          <p className="text-graphite/55 text-body-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Fale com um especialista e descubra como o modelo 4PL da Vendemmia pode otimizar toda a sua cadeia de suprimentos.
          </p>
          <div className="flex gap-4 justify-center mt-10 flex-wrap">
            <Button size="lg" href="/contato">
              Falar com especialista
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" href="/solucoes">
              Explorar soluções
            </Button>
          </div>
        </FadeUp>

        {/* Contact cards */}
        <FadeUp delay={0.2} className="mt-16">
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {CONTACT_CARDS.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="bg-white rounded-2xl p-5 text-center border border-brand/08 shadow-card hover:border-brand/20 hover:shadow-card-hover transition-all duration-300 group"
              >
                <span className="text-2xl mb-3 block">{card.icon}</span>
                <p className="text-xs text-graphite/40 uppercase tracking-widest mb-1 font-semibold">{card.label}</p>
                <p className="text-sm font-bold text-graphite group-hover:text-brand transition-colors break-all">
                  {card.value}
                </p>
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Newsletter inline */}
        <FadeUp delay={0.3} className="mt-14">
          <NewsletterBar inline />
        </FadeUp>
      </Container>
    </section>
  )
}
