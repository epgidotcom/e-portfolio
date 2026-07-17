/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0D10',
        surface: '#11151A',
        card: '#161B21',
        border: '#252B33',
        text: '#F2F4F7',
        muted: '#8B949E',
        accent: '#4DA3FF',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        panel: '0 10px 30px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

