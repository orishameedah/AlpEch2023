module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Lato'
    },
    container: {
      // padding: {
      //   DEFAULT: '1rem',
      //   lg: '2rem',
      // },
        padding: {
          DEFAULT: '10px',
          // lg: '0',
        },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
    extend: {
      colors: {
        primary: "#7FFF00",
        secondary: "#7CFC00",
        body: '#e5e5e5',
        dark: '#0a0909',
        grey: {
          DEFAULT: '#777876',
          100: '#e4e4e3',
        },
        green: {
          DEFAULT: '#00FF00',
          hover: '#7FFFD4',
        },
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },

    backgroundImage: {
      // pattern: "url('assets/img/whitebg.PNG')",
      hero: "url('assets/img/images (6).jpeg')",
      menu: "url('https://res.cloudinary.com/hameedah-images/image/upload/v1685830793/Real-Estate/Apartments/AlpEch/wwiil3idrbu8okqbryro.png')",
      testimonial: "url('https://res.cloudinary.com/hameedah-images/image/upload/v1685830793/Real-Estate/Apartments/AlpEch/wwiil3idrbu8okqbryro.png')",
      // newsletter: "url('assets/img/newsletter/bg.png')",
      footer: "url('https://res.cloudinary.com/hameedah-images/image/upload/v1685830688/Real-Estate/Apartments/AlpEch/ecgg7kxmluc3ujrxbnxn.png')",
    },
  },
  plugins: [],
};
