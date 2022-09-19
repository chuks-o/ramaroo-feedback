/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "r-mid-grey": "#BFBFBF",
        "r-dark-grey": "#808080",
        "r-blue": "#4262FF",
        "r-light-grey": "#EBEBEB",
        "r-navy": "#050038",
        "r-green": "#50D66A",
        "r-background": "#F0F0F3",
        "r-red": "#FF6475",
        "r-white": "#FFFFFF",
        "r-yellow": "#FCCF3D",
      },
    },
  },
  plugins: [],
};
