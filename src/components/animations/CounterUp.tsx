'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface CounterUpProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
}

export default function CounterUp({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2.5,
  className,
}: CounterUpProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <span ref={ref} className={cn('font-mono', className)}>
      {inView ? (
        <CountUp
          start={0}
          end={value}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          duration={duration}
          useEasing
          easingFn={(t, b, c, d) => {
            t /= d
            return -c * t * (t - 2) + b
          }}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  )
}
