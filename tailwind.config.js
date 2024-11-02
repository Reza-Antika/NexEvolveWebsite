/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 4px 20px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


