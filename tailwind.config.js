/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#be123c",
      },
      backgroundImage: {
        her: "url('./images/her.png')",
      },
    },
  },
  plugins: [],
};
