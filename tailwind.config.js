const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
