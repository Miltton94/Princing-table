/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web", "sans-serif"],
      },
      colors: {
        green: {
          500: "#04D361",
          700: "#1B873F",
        },
        orange: {
          500: "#FBA94C",
        },
        purple: {
          100: "#996DFF",
          200: "#7C3AED",
        },
        gray: {
          50: "#F8FAFC",
          200: "#E2E8F0",
          300: "#CBD5E1",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      screens: {
        lg: { max: "1024px" },
        // => @media (max-width: 1024px)
        xs: { max: "350px" },
      },
    },
  },
  plugins: [],
};

