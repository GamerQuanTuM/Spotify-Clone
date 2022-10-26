/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "spotify-green": "#1DB954",
        "spotify-white": "#FFFFFF",
        "spotify-black-base":"#121212",
        "spotify-black-primary": "#191414",
        "spotify-black-secondary": "#171818",
        "spotify-light-black": "#282828",
        "spotify-light-gray": "#B3B3B3",
        "spotify-gray": "#535353",
      },
      gridTemplateColumns: {
        "auto-fill-cards": "repeat(auto-fill,minmax(200px,1fr))",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
