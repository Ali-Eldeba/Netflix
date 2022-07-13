/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      primary: "#E50914",
      secondary: "#222222",
    },
  },
  plugins: [],
};

