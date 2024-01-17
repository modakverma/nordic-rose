/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        'new-york':['New York'],
      },
      colors: {
        primary: "#FFF",
        footer: "#000"
      },
      animation: {
        marquee: 'marquee 6s linear infinite',
        marquee2: 'marquee2 6s linear infinite'
      },
      width: {
        desktopWidth: "45rem",
        cardWidth: "350px",
        smallCardWidth: "310px",
        smallCardHeight: "310px",
      },
      keyframes: {
        marquee:{
          '0%':{transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(-50%)' }
        },
        marquee2:{
          '0%':{transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(-50%)' }
        },
      }
    },
  },
  plugins: [],
}

