/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Your main HTML file
    "./assets/js/**/*.js", // All JS files in the assets/js folder
    "./assets/css/**/*.css", // All CSS files in the assets/css folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D2A6A", // dark blue
        secondary: "#00a9ff", // light blue
        accent: "#F6F6F6", // Custom red
      },
    },
  },
  plugins:[],
};