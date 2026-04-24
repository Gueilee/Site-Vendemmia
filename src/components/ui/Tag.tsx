import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full',
        'bg-white/8 border border-white/10',
        'text-white/60 text-xs font-mono',
        className
      )}
    >
      {children}
    </span>
  )
}
