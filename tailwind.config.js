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
      colors: {
        primary: {
          800: "#2036A5",
        },
        secondary: {
          400: "#227BFF",
        },
        "primary-text": "#D7FAFF",
        link: "#52F5FF",
      },
    },
  },
  plugins: [],
};
