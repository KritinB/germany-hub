/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      colors: {
        bg: '#FFFFFF',
        'bg-alt': '#F8F8F8',
        surface: '#FFFFFF',
        border: '#E5E5E5',
        ink: '#1A1A1A',
        muted: '#666666',
        subtle: '#999999',
        red: '#CC1416',
        dark: '#111111',
      },
      borderRadius: {
        pill: '100px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
