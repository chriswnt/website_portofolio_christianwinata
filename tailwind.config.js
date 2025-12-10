/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
  extend: {
    colors: {
      toska: {
        100: "#dff6f3",
        200: "#b6e7e1",
        300: "#8dd9cf",
        400: "#65cbbd",
        500: "#3dbdab",
      },
    },
  },
},
  darkMode: "class",
  plugins: [],
};
