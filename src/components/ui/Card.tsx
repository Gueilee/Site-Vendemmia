'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
  as?: 'div' | 'article' | 'section'
}

export default function Card({ children, className, hover = false, gradient = false, as: Tag = 'div' }: CardProps) {
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={cn('glass rounded-card cursor-pointer', gradient && 'gradient-border', className)}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <Tag className={cn('glass rounded-card', gradient && 'gradient-border', className)}>
      {children}
    </Tag>
  )
}
