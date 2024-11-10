/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#002642",
        "dark-hover": "#003366",
        "accent": "#ccff00",
        "accent-hover": "#b3e600",
        "primary": "#111111",
        "primary-hover": "#222222",
        "secondary": "#333333",
        "secondary-hover": "#444444",
        "light": "#f2f2f2",
      },
      backdropBlur: ['responsive'],
    },
  },
  plugins: [],
};
