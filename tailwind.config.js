/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#fafafa',
        card: {
          DEFAULT: '#141414',
          foreground: '#fafafa',
          hover: '#1a1a1a',
        },
        popover: {
          DEFAULT: '#141414',
          foreground: '#fafafa',
        },
        primary: {
          DEFAULT: '#ffffff',
          foreground: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#1f1f1f',
          foreground: '#fafafa',
        },
        muted: {
          DEFAULT: '#262626',
          foreground: '#a1a1a1',
        },
        accent: {
          DEFAULT: '#10b981', // emerald
          foreground: '#0a0a0a',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        ring: 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 35s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

