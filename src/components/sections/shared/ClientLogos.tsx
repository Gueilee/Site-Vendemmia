import Container from '@/components/layout/Container'
import { CLIENT_LOGOS } from '@/lib/constants'

interface ClientLogosProps {
  title?: string
  speed?: number
}

export default function ClientLogos({
  title = 'Empresas que confiam na Vendemmia',
}: ClientLogosProps) {
  const triple = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS]

  return (
    <section className="py-12 border-y border-white/8 overflow-hidden">
      {title && (
        <Container className="mb-8">
          <p className="text-center text-white/40 text-sm font-medium tracking-widest uppercase">
            {title}
          </p>
        </Container>
      )}

      {/* Ticker 1 → */}
      <div className="relative mb-4 overflow-hidden">
        <div className="flex gap-16 w-max animate-ticker">
          {triple.map((client, i) => (
            <LogoItem key={`a-${i}`} name={client.name} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent" />
      </div>

      {/* Ticker 2 ← */}
      <div className="relative overflow-hidden">
        <div className="flex gap-16 w-max animate-ticker-rev">
          {triple.map((client, i) => (
            <LogoItem key={`b-${i}`} name={client.name} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent" />
      </div>
    </section>
  )
}

function LogoItem({ name }: { name: string }) {
  return (
    <div className="shrink-0 flex items-center justify-center w-36 h-10 opacity-35 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0">
      {/* Placeholder text — replace with <Image> when real logos are available */}
      <span className="text-white/60 font-mono text-sm tracking-wider uppercase">{name}</span>
    </div>
  )
}
