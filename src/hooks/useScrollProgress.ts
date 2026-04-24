'use client'

import { useState, useEffect, useRef } from 'react'

interface ScrollState {
  scrollY: number
  scrollProgress: number
  direction: 'up' | 'down'
}

export function useScrollProgress(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollProgress: 0,
    direction: 'down',
  })
  const lastScrollY = useRef(0)

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? scrollY / docHeight : 0
      const direction = scrollY > lastScrollY.current ? 'down' : 'up'
      lastScrollY.current = scrollY
      setState({ scrollY, scrollProgress, direction })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return state
}
