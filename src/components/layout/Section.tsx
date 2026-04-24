import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  paddingY?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Section({ children, className, id, paddingY = 'lg' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'overflow-hidden',
        paddingY === 'sm' && 'py-20',
        paddingY === 'md' && 'py-28 md:py-32',
        paddingY === 'lg' && 'py-32 md:py-40',
        paddingY === 'xl' && 'py-40 md:py-48',
        className
      )}
    >
      {children}
    </section>
  )
}
