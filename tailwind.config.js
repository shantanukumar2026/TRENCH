/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#004AAD',
        'brand-secondary': '#0085F4',
        'brand-accent': '#00BBFF',
        'brand-smoke': '#F8F8F8',
        'brand-light': '#F0F7FF',
        'brand-ice': '#E6F2FF',
        'brand-darkblue': '#003380',
        'brand-deep': '#002259',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Inter', 'monospace'],
      }
    },
  },
  plugins: [],
}
