/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        accent: "#00ADB5",
        hover: "#15616d",
        neutral: "#EEEEEE",
      },
      fontFamily: {
        'edu-au-vic-wa-nt-guides': ['Edu AU VIC WA NT Guides', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}