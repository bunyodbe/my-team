/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        midnightGreen: "#014E56",
        lightCoral: "#F67E7E",
        white: "#ffffff",
        raptureBlue: "#79C8C7",
        policeBlue: "#2C6269",
        deepGreen: "#004047",
        stateGreen: "#012F34",
        darkGreen: "#002529",
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
