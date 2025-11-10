/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@headlessui/react/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'media', // or 'media' or 'class',
  development: true,
  mode: "jit",
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {},
  },
  plugins: [
    require('tw-bootstrap-grid-optimizer')
  ],
};
