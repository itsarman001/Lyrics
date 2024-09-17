/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#353535",
        secondary: "#284B63",
        accent: "#3C6E71",
        text: "#FFFFFF",
        background: "#D9D9D9",
      },
    },
  },
  plugins: [],
}