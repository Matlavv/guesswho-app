/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowred: "#F6BD60",
        pale: "#E9B1B0",
        linen: "#F7EDE2",
        vermillon: "#D96745",
        darkgreen: "#0E1B0E",
      }
    },
  },
  plugins: [],
}

