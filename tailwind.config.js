/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      white: "#FFF",  
      black: "#000", 
    },
    colors: {
      'headercol': '#f0eee9',
      'btn':'#8d8679',
      'black':'#000'
    },
  },
  plugins: [],
}
