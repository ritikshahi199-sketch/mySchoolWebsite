/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./Component/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        schoolNavy: {
          800: '#0f2744',
          900: '#0a192f',
          950: '#050c18',
        },
        schoolGold: {
          400: '#fbbf24',
          500: '#d97706',
          600: '#b45309',
        }
      }
    },
  },
  plugins: [],
};