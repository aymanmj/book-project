/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "aqua"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
