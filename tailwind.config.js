/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F25430',
        secondary: '#D9CAC5',
        tertiary: '#F29F05',
        quaternary: '#F79257',
        accent1: '#F2B705',
        accent2: '#59545B',
        tprimary: '#F15F30',
        tsecondary: '#373d49',
        ttertiary: '#737C63'
      },
    },
  },
  plugins: [],
}

