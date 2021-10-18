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
        1200: '1200px',
        540: '540px',
        320:'320px',
        'full': '100%'
      },
      height:{
        1200: '1200px',
        400: '400px',
        540: '540px',
      },

      fontFamily: {
        body : "'Inter', sans-serif"
      },

      colors: {
        'brand-purple': {
          DEFAULT: '#8C30F5',
          800: '#D6B1FF',
          100: '#D6B1FF',
        },

        'brand-black': ['#0B0D17'],

        'brand-blue': {
          100: '#D5FAFC'
        },
        
        'gray': '#F4F5F7'
      },
      fontSize: {
        'h1': [ "72px", "98px"],
        'h2':["48px", "64px"],
        'h3': ["40px", "54px"],
        'h4': ["28px", "40px;"],
        'h5':["24px", "32px"],
        'lead':["18px", "32px"],
      }

  

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}