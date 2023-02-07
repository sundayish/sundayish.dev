/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
