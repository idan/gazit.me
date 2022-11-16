/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        warmGrey: {
          900: '#322c2c',
          800: '#575050',
          700: '#797272',
          600: '#989191',
          500: '#b3acac',
          400: '#cbc4c4',
          300: '#dfd9d9',
          200: '#efebeb',
          100: '#fdfbfb',
        },
      },
      fontSize: {
        xxs: '.625rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      fontFamily: {
        serif: '"Parclo Serif", serif',
        sans: '"Really Sans Small", sans-serif',
        caps: '"Really Sans Large", sans-serif',
      },
      letterSpacing: {
        xl: '0.2em',
      },
    },
  },
  plugins: [],
}
