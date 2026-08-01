/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trench-blue': '#2166D1',
        'deep-logo-blue': '#0754AE',
        'logo-red': '#C00000',
        'bright-blue': '#1E73E8',
        'sky-blue': '#3B82F6',
        'powder-blue': '#DBEAFE',
        'ice-blue': '#F0F7FF',
        'steel-blue': '#4682B4',
        'light-slate-blue': '#64748B',
        'cool-slate-gray': '#94A3B8',
        'off-white': '#F8FAFC',
      },
      fontFamily: {
        heading: ['Oswald', 'Chakra Petch', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
