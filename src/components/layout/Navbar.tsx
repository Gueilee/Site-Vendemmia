'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const IconArrow = ({ className }: { className?: string }) => (
  <svg className={cn('w-4 h-4', className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)
const IconChevron = ({ open }: { open: boolean }) => (
  <svg className={cn('w-3.5 h-3.5 transition-transform duration-200', open && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)
const IconExternalLink = () => (
  <svg className="w-3 h-3 inline ml-1 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)
const IconUser = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

interface DropdownItem {
  label: string
  href: string
  description?: string
  icon?: string
  external?: boolean
}

function NavDropdown({ items, onClose }: { items: DropdownItem[]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="absolute top-full left-[-20px] mt-3 w-80 z-50"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(66,44,118,0.10)',
        borderRadius: 20,
        boxShadow: '0 16px 48px rgba(66,44,118,0.12), 0 4px 16px rgba(66,44,118,0.06)',
        padding: 10,
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          onClick={onClose}
          className="flex items-start gap-3 p-3 rounded-xl transition-all duration-150 group"
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(66,44,118,0.04)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '')}
        >
          {item.icon && (
            <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
          )}
          <div>
            <span className="text-sm font-semibold text-graphite group-hover:text-brand transition-colors block">
              {item.label}
              {item.external && <IconExternalLink />}
            </span>
            {item.description && (
              <span className="text-xs text-graphite/50 mt-0.5 block">{item.description}</span>
            )}
          </div>
        </Link>
      ))}
    </motion.div>
  )
}

/* ── Mobile Menu ── */
const mobileOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit:   { opacity: 0, transition: { duration: 0.2 } },
}
const mobileContainer = {
  hidden:  { x: '100%' },
  visible: { x: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
  exit:    { x: '100%', transition: { duration: 0.28, ease: 'easeOut' as const } },
}
const mobileItem: Variants = {
  hidden:  { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.3, delay: 0.1 + i * 0.05, ease: 'easeOut' },
  }),
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            variants={mobileOverlay}
            initial="hidden" animate="visible" exit="exit"
            className="fixed inset-0 z-[190] bg-graphite/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            variants={mobileContainer}
            initial="hidden" animate="visible" exit="exit"
            className="fixed inset-y-0 right-0 z-[200] w-full max-w-sm overflow-y-auto"
            style={{ background: '#422c76' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/10">
              <Link href="/" onClick={onClose}>
                <Image src="/images/logo-vendemmia.png" alt="Vendemmia" width={140} height={36} className="h-9 w-auto brightness-0 invert" />
              </Link>
              <button
                onClick={onClose}
                aria-label="Fechar menu"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-8 space-y-8">
              {NAV_LINKS.map((group, gi) => (
                <motion.div key={group.label} custom={gi} variants={mobileItem} initial="hidden" animate="visible">
                  <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-3">
                    {group.label}
                  </p>
                  <div className="space-y-1">
                    {group.children?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl text-white/75 hover:text-white hover:bg-white/8 transition-colors"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium text-sm">{item.label}</span>
                        {item.external && <IconExternalLink />}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="px-6 pb-10 space-y-3 border-t border-white/10 pt-6">
              <a
                href="https://analytics.vendemmia.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-secondary-dark w-full justify-center"
                onClick={onClose}
              >
                <IconUser /> Login Analytics
              </a>
              <Link href="/contato" onClick={onClose} className="btn-primary w-full justify-center">
                Fale Conosco <IconArrow />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ── Logo ── */
function LogoMark() {
  return (
    <Image
      src="/images/logo-vendemmia.png"
      alt="Vendemmia"
      width={160}
      height={40}
      className="h-9 w-auto"
      priority
    />
  )
}

/* ── Navbar ── */
export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname  = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setActiveMenu(null); setMobileOpen(false) }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const openMenu  = (label: string) => { clearTimeout(closeTimer.current); setActiveMenu(label) }
  const closeMenu = () => { closeTimer.current = setTimeout(() => setActiveMenu(null), 80) }

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-[100] transition-all duration-300"
        style={{
          height: 72,
          background: scrolled ? 'rgba(250,249,245,0.92)' : 'rgba(250,249,245,0.0)',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(66,44,118,0.08)' : 'none',
          boxShadow: scrolled ? '0 2px 24px rgba(66,44,118,0.07)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">

          <Link href="/" aria-label="Vendemmia - Página inicial">
            <LogoMark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href)
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => openMenu(link.label)}
                  onMouseLeave={closeMenu}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 py-1',
                      isActive ? 'text-brand' : 'text-graphite/70 hover:text-graphite'
                    )}
                    aria-expanded={activeMenu === link.label}
                  >
                    {link.label}
                    <IconChevron open={activeMenu === link.label} />
                  </button>

                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #422c76, #ff2f69)' }}
                    />
                  )}

                  <AnimatePresence>
                    {activeMenu === link.label && link.children && (
                      <NavDropdown items={link.children} onClose={() => setActiveMenu(null)} />
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://analytics.vendemmia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2 !px-5 !text-sm flex items-center gap-1.5"
            >
              <IconUser /> Login
            </a>
            <Link href="/contato" className="btn-primary !py-2 !px-5 !text-sm flex items-center gap-1.5">
              Fale Conosco <IconArrow />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-graphite/70 hover:text-graphite transition-colors"
            aria-label="Abrir menu"
          >
            <span className="block w-5 h-0.5 bg-current rounded-full" />
            <span className="block w-5 h-0.5 bg-current rounded-full" />
            <span className="block w-3.5 h-0.5 bg-current rounded-full ml-auto" />
          </button>

        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
