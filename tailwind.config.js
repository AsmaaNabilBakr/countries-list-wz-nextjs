/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      "mobile": "375px",
      "desktop": "1440px",
      ...defaultTheme.screens,
    },
    colors: {
      background: {
        light: "hsl(0, 0%, 98%)",
        dark: "hsl(207, 26%, 17%)",
      },
      element: {
        light: "hsl(0, 0%, 100%)",
        dark: "hsl(209, 23%, 22%)",
      },
      text: {
        light: "hsl(200, 15%, 8%)",
        dark: "hsl(0, 0%, 100%)",
      },
      input: {
        light: "hsl(200, 15%, 8%)",
        dark: "hsl(209, 23%, 22%)",
      },
      white: "hsl(0, 0%, 100%)",
      ...defaultTheme.colors,
    },
  },
  plugins: [],
};
