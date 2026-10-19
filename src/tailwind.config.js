/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#a855f7",
        dark: "#130c26",
        card: "#18102c",
      },
    },
  },

  plugins: [],
};