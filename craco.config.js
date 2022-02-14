module.exports = {
  darkMode: 'class',
  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}