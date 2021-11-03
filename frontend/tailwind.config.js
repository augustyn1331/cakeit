const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./public/**/*.html",
  ],
  darkMode: false,
  theme: {
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      red: "#E30B5C",
      white: "#FFFFFF",
      black: "#000000",
      purple: "#4c4981",
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
      lg: "992px",
      fhd: "1920px",
    },
    fontFamily: {
      primary: ["Lato, Arial", "sans-serif"],
    },
    letterSpacing: {
      normal: "-10em",
    },
    extend: {
      colors: {
        transparent: "transparent",
      },
      padding: {
        110: "110px",
        120: "120px",
        150: "150px",
      },
      minHeight: {
        300: "300px",
        600: "600px",
      },
      gridTemplateColumns: {
        "1fr": "1fr",
        "2x1fr": "1fr 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
};
