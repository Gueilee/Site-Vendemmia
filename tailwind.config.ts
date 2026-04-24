import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Paleta oficial Vendemmia ────────────────────────────
        brand: {
          DEFAULT: '#422c76',
          light:   '#5c3fa8',
          dark:    '#2d1e52',
          50:      '#f0ebfc',
          100:     '#ddd0f5',
          200:     '#b9a9e0',
        },
        magenta: {
          DEFAULT: '#ff2f69',
          light:   '#ff6b96',
          dark:    '#cc0044',
          glow:    'rgba(255,47,105,0.12)',
        },
        graphite: {
          DEFAULT: '#414042',
          light:   '#6b6a6c',
          50:      '#f7f7f7',
          100:     '#e8e7e7',
          200:     '#c8c7c7',
        },
        cream: {
          DEFAULT: '#faf9f5',
          mid:     '#f2f1ed',
          dark:    '#e8e7e1',
        },
        mint: {
          DEFAULT: '#01E18E',
          light:   '#33e9a5',
          dark:    '#00b570',
          glow:    'rgba(1,225,142,0.12)',
        },
        // ── Aliases (compatibilidade com código existente) ──────
        navy: {
          DEFAULT: '#422c76',
          mid:     '#2d1e52',
          light:   '#5c3fa8',
        },
        violet: {
          DEFAULT: '#422c76',
          light:   '#5c3fa8',
          glow:    'rgba(66,44,118,0.12)',
        },
        cyan: {
          DEFAULT: '#01E18E',
          glow:    'rgba(1,225,142,0.12)',
        },
        green: {
          neon: '#01E18E',
        },
        surface: {
          1: 'rgba(66,44,118,0.04)',
          2: 'rgba(66,44,118,0.06)',
          3: 'rgba(66,44,118,0.10)',
        },
        border: {
          DEFAULT: 'rgba(66,44,118,0.10)',
          hover:   'rgba(66,44,118,0.20)',
        },
      },
      fontFamily: {
        display: ['Nexa', 'var(--font-nexa)', 'Outfit', 'sans-serif'],
        body:    ['Nexa', 'var(--font-nexa)', 'Outfit', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['6rem',     { lineHeight: '1.0',  letterSpacing: '-0.03em' }],
        'display-lg': ['4.5rem',   { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['3.75rem',  { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'heading-xl': ['3rem',     { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-lg': ['2.25rem',  { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
        'heading-md': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.5rem',   { lineHeight: '1.3' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.7' }],
        'body-md':    ['1rem',     { lineHeight: '1.6' }],
        'body-sm':    ['0.875rem', { lineHeight: '1.5' }],
        'label':      ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        'section-sm': '80px',
        'section-md': '120px',
        'section-lg': '160px',
        'section-xl': '200px',
      },
      borderRadius: {
        'card':    '24px',
        'card-lg': '32px',
      },
      backgroundImage: {
        'gradient-brand':  'linear-gradient(135deg, #422c76, #ff2f69)',
        'gradient-violet': 'linear-gradient(135deg, #422c76, #ff2f69)',
        'gradient-tech':   'linear-gradient(135deg, #01E18E, #422c76)',
        'gradient-dark':   'linear-gradient(135deg, #2d1e52 0%, #422c76 50%, #2d1e52 100%)',
        'gradient-hero':   'linear-gradient(180deg, #faf9f5 0%, #f2f1ed 100%)',
        'grid-lines':      'linear-gradient(rgba(66,44,118,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(66,44,118,0.04) 1px, transparent 1px)',
        'dots':            'radial-gradient(circle, rgba(66,44,118,0.10) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
        'dots': '24px 24px',
      },
      boxShadow: {
        'glow-brand':   '0 0 40px rgba(66,44,118,0.25)',
        'glow-violet':  '0 0 40px rgba(66,44,118,0.25)',
        'glow-magenta': '0 0 40px rgba(255,47,105,0.25)',
        'glow-mint':    '0 0 40px rgba(1,225,142,0.25)',
        'glow-cyan':    '0 0 40px rgba(1,225,142,0.25)',
        'card':         '0 2px 16px rgba(66,44,118,0.07)',
        'card-hover':   '0 8px 40px rgba(66,44,118,0.15)',
        'card-lift':    '0 16px 48px rgba(66,44,118,0.18)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 2s ease-in-out infinite',
        'ticker':      'ticker 30s linear infinite',
        'ticker-rev':  'tickerReverse 30s linear infinite',
        'spin-slow':   'spin 20s linear infinite',
        'gradient-x':  'gradientX 4s ease infinite',
        'fade-in':     'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.05)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerReverse: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
