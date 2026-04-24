'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  loading?: boolean
}

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
)

const baseClasses = (variant: string, size: string, disabled: boolean) =>
  cn(
    variant === 'primary'   && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    variant === 'ghost'     && 'inline-flex items-center gap-2 text-brand hover:text-brand-light transition-colors font-semibold',
    size === 'sm' && '!py-2 !px-4 !text-sm',
    size === 'lg' && '!py-4 !px-8 !text-base',
    disabled && 'opacity-50 pointer-events-none'
  )

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, target, loading, disabled, children, ...props }, ref) => {
    const classes = cn(baseClasses(variant, size, !!disabled || !!loading), className)
    const content = (
      <>
        {loading && <Spinner />}
        {children}
      </>
    )

    if (href) {
      return (
        <motion.div whileTap={{ scale: 0.97 }} className="inline-flex">
          <Link href={href} target={target} className={classes}>
            {content}
          </Link>
        </motion.div>
      )
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileTap={{ scale: 0.97 }}
        className={classes}
        disabled={disabled || loading}
        {...(props as any)}
      >
        {content}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button
