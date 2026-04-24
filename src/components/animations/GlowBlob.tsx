'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowBlobProps {
  color?: 'violet' | 'magenta' | 'cyan'
  dark?: boolean
  size?: number
  className?: string
  opacity?: number
  top?: string | number
  left?: string | number
  right?: string | number
  bottom?: string | number
}

export default function GlowBlob({
  color = 'violet',
  dark = false,
  size = 600,
  className,
  opacity = 1,
  top,
  left,
  right,
  bottom,
}: GlowBlobProps) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -24, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      className={cn(
        'glow-blob pointer-events-none z-0',
        !dark && color === 'violet'  && 'glow-violet',
        !dark && color === 'magenta' && 'glow-magenta',
        !dark && color === 'cyan'    && 'glow-cyan',
        dark  && color === 'violet'  && 'glow-violet-dark',
        dark  && color === 'magenta' && 'glow-magenta-dark',
        dark  && color === 'cyan'    && 'glow-violet-dark',
        className
      )}
      style={{ width: size, height: size, opacity, top, left, right, bottom }}
    />
  )
}
