'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: keyof React.JSX.IntrinsicElements
}

export default function FadeUp({ children, className, delay = 0, as: Tag = 'div' }: FadeUpProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const MotionTag = motion[Tag as 'div'] ?? motion.div

  return (
    <MotionTag
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
