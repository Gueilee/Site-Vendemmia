import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursorLoader from '@/components/cursor/CustomCursorLoader'

/* Outfit = fallback web para Nexa (geometria e pesos similares) */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-nexa',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vendemmia.com.br'),
  title: {
    template: '%s | Vendemmia Logística 4PL',
    default: 'Vendemmia — Logística 4PL Inteligente',
  },
  description:
    'A Vendemmia é uma empresa brasileira de logística 4PL que integra importação, armazém, transportes e analytics em uma plataforma única. Mais de 14 anos conectando cadeias logísticas ao mundo.',
  keywords: ['logística 4PL', 'supply chain', 'importação', 'armazém', 'transportes', 'analytics logístico', 'Vendemmia'],
  openGraph: {
    title: 'Vendemmia — Logística 4PL Inteligente',
    description: 'Integração completa da cadeia logística com tecnologia, dados e expertise.',
    url: 'https://vendemmia.com.br',
    siteName: 'Vendemmia',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vendemmia — Logística 4PL Inteligente',
    description: 'Integração completa da cadeia logística com tecnologia, dados e expertise.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-body antialiased bg-cream text-graphite overflow-x-hidden">
        <CustomCursorLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
