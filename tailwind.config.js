/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Inter', 'Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'text': '#e9e7e7',
        'background': '#101010',
        'primary': '#4ddc40',
        'secondary': '#1f1f23',
        'accent': '#808e8e',
      }
    },
  },
  plugins: [],
}
