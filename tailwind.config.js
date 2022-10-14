const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        Oswald: ['"Oswald"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}