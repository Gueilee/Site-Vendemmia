'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/animations'
import { useInView } from 'react-intersection-observer'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export default function SectionLabel({ children, className, animate = true }: SectionLabelProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  if (!animate) {
    return <span className={cn('section-label', className)}>{children}</span>
  }

  return (
    <motion.span
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={cn('section-label', className)}
    >
      {children}
    </motion.span>
  )
}
