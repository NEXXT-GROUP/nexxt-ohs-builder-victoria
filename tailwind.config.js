/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d4dded',
          200: '#aab9d6',
          300: '#7f95bf',
          400: '#5571a8',
          500: '#3c578f',
          600: '#2e4470',
          700: '#223358',
          800: '#16223d',
          900: '#0c1526',
          950: '#070d18',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        safety: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(12,21,38,0.08), 0 1px 2px -1px rgba(12,21,38,0.06)',
        'card-lg': '0 10px 30px -10px rgba(12,21,38,0.20)',
      },
    },
  },
  plugins: [],
}
