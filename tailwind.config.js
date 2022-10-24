/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif',],
        'lato':['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin'),[
    require('flowbite/plugin')
]],
  
}