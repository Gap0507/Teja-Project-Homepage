/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        campton: ['Campton', 'sans-serif'],
        
        'baton-turbo': ['"Baton Turbo"', 'sans-serif'], // Adding the font family here

      },
    },
  },
  plugins: [],
}
