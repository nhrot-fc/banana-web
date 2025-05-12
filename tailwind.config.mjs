/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#5cb85c',
        'primary-dark': '#4a9d4a',
        'secondary': '#222222',
        'dark': '#121212',
        'green': {
          400: '#70d370',
          500: '#5cb85c',
          600: '#4a9d4a',
          700: '#3a8a3a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
