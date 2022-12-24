/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greytext': '#727272',
        'dark-blue-bg': '#011627',
        'dark': '#0D0D0D'
      },
      boxShadow: {
        'even': 'box-shadow: 0px 4px 15px 0px #EDEDED inset;'
      },
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
