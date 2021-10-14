module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {

      fontFamily: {
        body : "'Inter', sans-serif"
      },

      colors: {
        tim: {
          100: '#8C30F5',
          200: '#D6B1FF',
        }
      }

  

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}