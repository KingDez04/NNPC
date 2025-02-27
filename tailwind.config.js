/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headingsFont: ["Itim", "cursive"],
        textFont: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
