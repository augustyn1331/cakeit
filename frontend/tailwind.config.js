const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./public/**/*.html",
  ],
  darkMode: false,
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
      fhd: "1920px",
    },
    fontFamily: {
      primary: ["Teko, Arial", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
      },
    },
  },
  variants: {
    extend: {},
  },
};
