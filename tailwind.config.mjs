/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2d9d40',
        'primary-dark': '#1e7a2b',
        'secondary': '#072c0d',
        'dark': '#051c0a',
        'black': '#040705',
        'text': '#ffffff',
        'text-muted': '#a0a0a0',
        'green': {
          400: '#34d399',
          500: '#10b981', 
          600: '#065f46',
          700: '#1e7a2b',
          800: '#072c0d',
          900: '#051c0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundColor: {
        'main': '#051c0a',
        'secondary': '#072c0d',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
