/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        IndieFlower: ["Indie Flower", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
