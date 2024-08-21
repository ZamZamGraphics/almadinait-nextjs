/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // or 'media' or 'class',
  development: true,
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-bootstrap-grid-optimizer')
  ],
};
