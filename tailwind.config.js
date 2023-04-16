/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Phone
      },
      colors: {
        primary: {
          800: "#2036A5",
        },
        secondary: {
          400: "#227BFF",
        },
        "btn-top": "#005CB1",
        "btn-bottom": "#004D94",
        "primary-text": "#D7FAFF",
        "secondary-text": "#A6C3C7",
        "tertiary-text": "#485557",
        "overlay-top": "#A9A9A9",
        "overlay-bottom": "#FFFFFF",
        overlay: "#D4D4D4",
        link: "#52F5FF",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        heading: "1.563rem",
        subheading: "1.25rem",
      },
    },
  },
  plugins: [],
};
