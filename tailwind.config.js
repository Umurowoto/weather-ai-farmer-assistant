/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6EF",
        forest: {
          light: "#3F6B45",
          DEFAULT: "#2F5233",
          dark: "#1F3823",
        },
        amber: {
          light: "#F0BE7D",
          DEFAULT: "#E0A458",
          dark: "#C8862E",
        },
        sky: "#4A7C9E",
        clay: "#C1502E",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
