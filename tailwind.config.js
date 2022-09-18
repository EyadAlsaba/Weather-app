/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blueMe: 'rgba(var(--color-blue) / 1.0)',
        grayMe: 'rgba(var(--color-gray) / 1.0)',
        blackBackground: 'rgba(var(--color-black-background) / 0.1)',
        whiteBackground: 'rgba(var(--color-white-background) / 0.1)',
        lightBlue: '#D1D6DC',
        primaryBlue: '#2E66A1',

      },
      backgroundImage: {
        homePage: 'url("../public/homePageBackground.jpg")',
        resultPage: 'url("../public/resultPageBackground.jpg")'
      }
    },
  },
  plugins: [],
}
