/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0062d6",
      },
      fontFamily: {
        custom: ['Merriweather', 'serif']
      }
    },
  },
  plugins: [],
};
