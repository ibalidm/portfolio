/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D6EFD8",
        },
        secondary: {
          DEFAULT: "#80AF81",
        },
        TextPrimary: {
          DEFAULT: "#1A5319",
        },
        TextSecondary: {
          DEFAULT: "#508D4E",
        }
      }
    },
  },
  plugins: [],
}

