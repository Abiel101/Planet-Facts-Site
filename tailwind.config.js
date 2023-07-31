/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      colors:{
        'text-color': '#ffffff',
        'bg-color': '#070724',
        'hover-state': '#38384F',
        'medium-gray': '#838391',
        'mercury-accent': '#419EBB',
        'venus-accent': '#EDA249',
        'earth-accent': '#6D2ED5',
        'mars-accent': '#D14C32',
        'jupiter-accent': '#D83A34',
        'saturn-accent': '#CD5120',
        'uranus-accent': '#1EC1A2',
        'neptune-accent': '#2D68F0',
      },
      fontFamily:{
        'antonio': 'Antonio',
        'spartan': 'League Spartan',
      }
    },
  },
  plugins: [],
}

