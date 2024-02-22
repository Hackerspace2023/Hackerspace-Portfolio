/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ff95",
        "bg-primary": "#111119",
        "bg-secondary": "#00ff951a",
        "txt-primary": "#ffffff",
        "txt-secondary": "#7e7e7e",
      },
      fontFamily: {
        firacode: ["Fira Code", ...defaultTheme.fontFamily.mono],
        audiowide: ["AudioWide", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
