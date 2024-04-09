/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Define your custom color here
          evolvisPink: '#F58B74', // Example color
          evolvisGray: '#F3F3F3',
          evolvisFooterDark: '#414042'
    }
    },
  },
  plugins: [],
}