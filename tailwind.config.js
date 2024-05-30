/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'text-hover': '#00AA5B',
        'gray': '#6D7588',
      },
      screens:{
        'hmd':'900px',
        'slg': '1225px'
      }
    },
  },
  plugins: [],
}

