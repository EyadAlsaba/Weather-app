/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blueMe: 'rgba(var(--color-blue) / 1.0)',
        grayMe: 'rgba(var(--color-gray) / 1.0)',
        blackBG: 'rgba(var(--color-black-background) / 0.1)',
        whiteBG: 'rgba(var(--color-white-background) / 0.1)',
        lightBlue: '#D1D6DC',
        primaryBlue: '#2E66A1',

      },
      backgroundImage: {
        homePage: 'url("https://weather-app-eyadalsaba.vercel.app/homePageBackground.jpg")',
        Clouds: 'url("https://weather-app-eyadalsaba.vercel.app/Clouds.jpg")',
        Rain: 'url("https://weather-app-eyadalsaba.vercel.app/Rain.jpg")',
        Clear: 'url("https://weather-app-eyadalsaba.vercel.app/Clear.jpg")',
        Foggy: 'url("https://weather-app-eyadalsaba.vercel.app/Foggy.jpg")',
        Mist: 'url("https://weather-app-eyadalsaba.vercel.app/Foggy.jpg")',
        Snow: 'url("https://weather-app-eyadalsaba.vercel.app/Snow.jpg")',
        Thunderstorm: 'url("https://weather-app-eyadalsaba.vercel.app/Thunderstorm.jpg")'
      }
    },
  },
  plugins: [],
}
