import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'violet' | 'magenta' | 'cyan' | 'green' | 'white'
  className?: string
}

export default function Badge({ children, variant = 'violet', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'section-label',
        variant === 'violet'  && '!bg-violet/12 !border-violet/25 !text-violet-light',
        variant === 'magenta' && '!bg-magenta/12 !border-magenta/25 !text-magenta-light',
        variant === 'cyan'    && '!bg-cyan/12 !border-cyan/25 !text-cyan',
        variant === 'green'   && '!bg-green-neon/12 !border-green-neon/25 !text-green-neon',
        variant === 'white'   && '!bg-white/8 !border-white/15 !text-white/80',
        className
      )}
    >
      {children}
    </span>
  )
}
