/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#39CE20',
        'secondary-color': '#FF8E00',
      },
      backgroundImage: {
        'main-hero': 'url("/assets/images/HeroBG.png")',
      },
    },
  },
  plugins: [],
};
