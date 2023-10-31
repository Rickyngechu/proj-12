/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "Bright-Red": "hsl(12, 88%, 59%)",
      "Dark-Blue": "hsl(228, 39%, 23%)",

      "Dark-Grayish-Blue": "hsl(227, 12%, 61%)",
      "Very-Dark-Blue": "hsl(233, 12%, 13%)",
      "Very-Pale-Red": "hsl(13, 100%, 96%)",
      "Vary-Light-Gray": "hsl(0, 0%, 98%)",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "900px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
