import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Espaciado del Brand Book
      spacing: {
        'unit': '4px',
        'stack-sm': '8px',
        'stack-md': '24px',
        'stack-lg': '48px',
        'gutter': '16px',
        'margin-mobile': '20px',
        'margin-desktop': '64px',
      },
      // Tipografías del Brand Book
      fontFamily: {
        'title': ['Anton', 'sans-serif'],
        'subtitle': ['Bebas Neue', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        // Aliases para compatibilidad con componentes existentes
        'display': ['Anton', 'sans-serif'],
        'subhead': ['Bebas Neue', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      // Colores del Brand Book
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'white': '#FFFFFF',
        'light': '#FFFFFF',
        'dark': '#0636A5',
        'primary-navy': '#0636A5',
        'on-background': '#1c1b1b',
        'on-surface-variant': '#0636A5',
      },
      // Sombras duras del Brand Book (sin blur — neo-brutalista)
      boxShadow: {
        'hard-primary': '4px 4px 0px 0px #0636A5',
        'hard-secondary': '4px 4px 0px 0px #FFEC01',
        'hard-white': '4px 4px 0px 0px #FFFFFF',
        'none': '0px 0px 0px 0px',
        // Aliases para compatibilidad
        'brutal': '4px 4px 0px 0px #0636A5',
        'brutal-sm': '2px 2px 0px 0px #0636A5',
      },
      // Radio de borde: 0px (flat — neo-brutalista)
      borderRadius: {
        'none': '0',
        'sm': '0',
        'DEFAULT': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '0',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-dot': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(255, 236, 1, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(255, 236, 1, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(255, 236, 1, 0)' },
        },
        'scroll-track': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'floating': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-dot': 'pulse-dot 2s infinite',
        'scroll-track': 'scroll-track 25s linear infinite',
        'floating': 'floating 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;