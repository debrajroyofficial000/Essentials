/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          700: "#8D493A",
          500: "#D0B8A8",
          300: "#DFD3C3",
          100: "#F8EDE3",
        },
      },
    },
  },
  plugins: [],
};
