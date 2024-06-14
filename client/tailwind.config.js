/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor:{
        "custom-yellow": "#f9c74f",
        "custom-purple": "#9d4edd",
      }
    },
  },
  plugins: [],
}

