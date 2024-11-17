/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#1E1E2E",
        hover: "#313244",
        accent: "#A6E3A1",
        accentHover: "#89DCEB",
        primary: "#11111B",
        primaryHover: "#181825",
        secondary: "#45475A",
        secondaryHover: "#585B70",
        light: "#CDD6F4",
      },
    },
  },
  plugins: [],
};
