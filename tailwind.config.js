/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#FFFFFF",
        "brand-surface": "#F8FAFC",
        "brand-accent": "#4F46E5",
        "brand-accent-hover": "#4338CA",
        "brand-ink": "#0F172A",
        "brand-muted": "#64748B",
        "brand-border": "#E2E8F0",
        "s1": "#4F46E5",
        "s2": "#06B6D4",
        "s3": "#D97706",
        bg: "#F1F5F9",
        surface: "#FFFFFF",
        ink: "#0F172A",
        body: "#475569",
        muted: "#64748B",
        line: "#E2E8F0",
        "line-soft": "#F1F5F9",
        accent: "#4F46E5",
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
