/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#93c5fd",  // light blue
          DEFAULT: "#3b82f6", // main brand color
          dark: "#1e40af",   // dark blue
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px", // custom breakpoint
      },
    },
  },
  plugins: [],
}
