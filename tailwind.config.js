/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customLightBlue: 'rgb(212, 223, 231)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #F2F9FE, #FFFFFF)', // Adjust if needed
      },
    },
  },
  plugins: [],
}

