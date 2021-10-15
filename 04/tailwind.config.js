module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '375px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1110px',
      // => @media (min-width: 1110px) { ... }
    },

    container: {
      center: true,

    },
    extend: {


      width:{
        1200: '1200px'
      },
      height:{
        1200: '1200px'
      },

      fontFamily: {
        body : "'Inter', sans-serif"
      },

      colors: {
        'brand-purple': {
          DEFAULT: '#8C30F5',
          800: '#D6B1FF',
          100: '#D6B1FF',
        }
      },
      fontSize: {
        'h1': [ "72px", "98px"]
      }

  

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}