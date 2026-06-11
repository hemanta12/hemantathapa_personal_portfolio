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
        bg: '#f5f6f8',
        surface: '#ffffff',
        ink: '#14171c',
        body: '#565d68',
        muted: '#8b929c',
        line: '#e6e8ec',
        'line-soft': '#eef0f3',
        accent: '#4f46e5',
        s1: '#4f46e5',
        s2: '#0d9488',
        s3: '#d97706',
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "sans-serif",
        ],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
