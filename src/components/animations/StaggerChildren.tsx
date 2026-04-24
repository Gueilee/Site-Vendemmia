'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { staggerContainer, staggerFast, fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  fast?: boolean
  delay?: number
}

export default function StaggerChildren({ children, className, fast = false, delay = 0 }: StaggerChildrenProps) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const containerVariant = fast ? staggerFast : staggerContainer

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: fast ? 0.07 : 0.12,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  )
}
