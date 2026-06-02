export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'amethyst-smoke': {
          50: '#f6eff5',
          100: '#ecdfec',
          200: '#d9bfd9',
          300: '#c69fc6',
          400: '#b47eb3',
          500: '#a15ea0',
          600: '#814b80',
          700: '#603960',
          800: '#402640',
          900: '#201320',
          950: '#160d16',
        },
      },
    },
  },
  plugins: [],
}
