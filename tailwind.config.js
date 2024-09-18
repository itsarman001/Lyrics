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
        highlight: "#FF2E63",
        text: "#F5F5F5",
      },
    },
  },
  plugins: [],
}