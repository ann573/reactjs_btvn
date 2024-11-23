/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text_colors" : "#333f48"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}


