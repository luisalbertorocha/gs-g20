/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#E3F5FF",
          200: "#CBEDFF",
          300: "#AFE3FF",
          400: "#8BCDF1",
          500: "#63ADD5",
          600: "#418FB8",
          700: "#26739C",
          800: "#024163",
          900: "#093147",
        }
      }
    },
  },
  plugins: [],
})
