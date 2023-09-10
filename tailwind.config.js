/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#3374CD",
        colorSecond: "#3A3A3A",
        border: "#D1D1D1",
        btnBg:"#3A3A3A"
      },
      backgroundImage:{
        'img-category01': 'url(/images/category01.png)',
        'img-category02': 'url(/images/category02.png)'
      }
    },
  },
  plugins: [],
};
