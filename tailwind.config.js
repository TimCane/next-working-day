/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxWidth:{
        cal: '30ch'
      },
      minWidth: {
          cal: '30ch'
      }
    },
  },
  plugins: [],
}