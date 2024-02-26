/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "ronin-pink": "#eeabce",
      "ronin-green-900": "#00582b",
      "ronin-green-600": "#09743E",
      "ronin-green-300": "#168F52",
    },
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
