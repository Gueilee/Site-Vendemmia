'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorState = 'default' | 'hover' | 'click'

export default function CustomCursor() {
  const [state, setState] = useState<CursorState>('default')
  const [mounted, setMounted] = useState(false)

  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)
  const dotX = useMotionValue(-200)
  const dotY = useMotionValue(-200)

  const ringX = useSpring(rawX, { damping: 20, stiffness: 300, mass: 0.5 })
  const ringY = useSpring(rawY, { damping: 20, stiffness: 300, mass: 0.5 })

  const clickTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ('ontouchstart' in window) return

    setMounted(true)
    document.body.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX - 18)
      rawY.set(e.clientY - 18)
      dotX.set(e.clientX - 6)
      dotY.set(e.clientY - 6)
    }

    const onMouseDown = () => {
      setState('click')
      clearTimeout(clickTimeout.current)
      clickTimeout.current = setTimeout(() => setState('default'), 200)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setState('hover')
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setState('default')
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      clearTimeout(clickTimeout.current)
    }
  }, [rawX, rawY, dotX, dotY])

  if (!mounted) return null

  return (
    <>
      {/* Outer ring — lagged */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY }}
        animate={{
          width:  state === 'hover' ? 60 : state === 'click' ? 28 : 36,
          height: state === 'hover' ? 60 : state === 'click' ? 28 : 36,
          borderWidth: 1.5,
          borderStyle: 'solid',
          borderColor:
            state === 'hover'
              ? 'rgba(108,43,217,0.8)'
              : 'rgba(255,255,255,0.35)',
          background:
            state === 'hover'
              ? 'rgba(108,43,217,0.06)'
              : 'transparent',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* Inner dot — instant */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-white"
        style={{ x: dotX, y: dotY }}
        animate={{
          width:  state === 'hover' ? 6 : state === 'click' ? 16 : 12,
          height: state === 'hover' ? 6 : state === 'click' ? 16 : 12,
          scale:  state === 'click' ? [1, 1.8, 1] : 1,
          background: state === 'hover' ? '#6C2BD9' : '#ffffff',
        }}
        transition={{ duration: state === 'click' ? 0.15 : 0.2, ease: 'easeOut' }}
      />
    </>
  )
}
