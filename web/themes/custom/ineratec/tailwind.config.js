/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../../modules/custom/**/*.js",
    "./js/**/*.js",
    "./**/*.twig",
    "../../../modules/custom/**/*.twig",
  ],
  theme: {
    extend: {
      screens: {
        lg:'1025px',
      },
      colors: {
        blue: "#4BAEE5",
        black: "#1C202D",
        gray: "#8D8F96",
        green: "#7BF0AC",
        lightBlue: "#4EC0FF",
        mapOrangeBorder: "#FF6C3D",
        mapOrangeFill: "#ffc4b1",
      },
      fontFamily: {
        PtSansBold: ["PtSansBold", "sans-serif"],
        PtSansItalic: ["PtSansItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
