/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firacode: ["Fira Code", ...defaultTheme.fontFamily.mono],
        audiowide: ["AudioWide", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
