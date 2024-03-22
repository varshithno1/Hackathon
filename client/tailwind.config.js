/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif"],
        notoDis: ["Noto Serif Display"],
        ibm: ["IBM Plex Sans"],
        satoshi: ["satoshi"],
        varRound: ["Varela Round"],
      },
      colors: {
        inputColor: "#ebf0f7",
      },
    },
  },
  plugins: [],
};
