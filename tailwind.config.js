/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quick: ['Quicksand']
      },
      backgroundImage: {
        project1: "url('../src/images/e-commerce.png')",
        project2: "url('../src/images/interpret.png')",
        project3: "url('../src/images/tictactoe.png')",
      }
    },
  },
  plugins: [],
}

