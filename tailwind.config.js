module.exports = {
  purge: [
    "./**.php",
    "./**/**.php",
    "./src/js/**.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '900px',
      'xl': '1200px'
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#08080A',
          light: '#2E2E33'
        },
        grey: {
          DEFAULT: '#D0D0D0',
          light: '#F5F5F5'
        }
      },
      maxWidth: {
        'w-max-theme': '37rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}