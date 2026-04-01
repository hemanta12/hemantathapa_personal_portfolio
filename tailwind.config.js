/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-base": "#FFFFFF",
        "bg-alt": "#F8F9FA",
        "text-primary": "#1A1A1A",
        "text-secondary": "#64748B",
        "accent-primary": "#0A2540",
        "accent-hover": "#1D4ED8",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
