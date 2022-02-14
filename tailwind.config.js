const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        yellow: colors.yellow
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    backdropFilter: true,
  }
}
