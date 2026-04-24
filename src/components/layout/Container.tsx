import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'full'
}

export default function Container({ children, className, size = 'lg' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6',
        size === 'sm'   && 'max-w-3xl',
        size === 'md'   && 'max-w-5xl',
        size === 'lg'   && 'max-w-7xl',
        size === 'full' && 'w-full',
        className
      )}
    >
      {children}
    </div>
  )
}
