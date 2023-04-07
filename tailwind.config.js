/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'violet': 'hsl(263, 55%, 52%)',
      'dark-gray-blue': 'hsl(217, 19%, 35%)',
      'dark-black-blue': 'hsl(219, 29%, 14%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(0, 0%, 81%)',
      'light-gray-blue': 'hsl(210, 46%, 95%)',
    },
    fontFamily: {
      'body': ['"Barlow Semi Condensed"', 'sans-serif']
    },
    extend: {
      gridTemplateAreas: {
        'layout': [
          'a a b c',
          'd e e c'
        ],
      },
      gridTemplateColumns: {
        'layout': '1fr 1fr 1fr 1fr',
      },
      gridTemplateRows: {
        'layout': '1fr 1fr',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
