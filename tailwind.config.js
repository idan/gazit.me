module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        serif:
          'ElenaWebBasic, Georgia, Cambria, "Times New Roman", Times, serif',
        sans:
          '"Concourse Text", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        caps: 'Concourse Caps',
        mono:
          '"Fira Code", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
    },
  },
  variants: {},
  plugins: [],
}
