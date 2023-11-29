/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d5c61',
        secondary: '#379683',
        tertiary: '#7395ae',
        accent1: '#557a95',
        accent2: '#b1a296',
      },
    },
  },
  plugins: [],
}

