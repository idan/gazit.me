module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.css', './writing/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        warmGrey: {
          '900': '#322c2c',
          '800': '#575050',
          '700': '#797272',
          '600': '#989191',
          '500': '#b3acac',
          '400': '#cbc4c4',
          '300': '#dfd9d9',
          '200': '#efebeb',
          '100': '#fdfbfb',
        },
      },
      fontFamily: {
        serif:
          'ElenaWebBasic, Georgia, Cambria, "Times New Roman", Times, serif',
        sans:
          '"Concourse Text", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        caps: 'Concourse Caps',
        mono:
          '"Fira Code", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      fontSize: {
        xxs: '.625rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
