/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#06191d',
        secondary: '#00c5c8',
      }
    },
  },
  plugins: [],
}
