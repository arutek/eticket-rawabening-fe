const colors = require('./src/styles/variables/colors.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
}
