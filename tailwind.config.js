/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "SF Pro Display",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "sans-serif",
        ],
        sans: [
          "SF Pro Text",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "sans-serif",
        ],
      },
      colors: {
        action: "#0066cc",
        "action-focus": "#0071e3",
        "action-dark": "#2997ff",
        ink: "#1d1d1f",
        parchment: "#f5f5f7",
        pearl: "#fafafc",
        hairline: "#e0e0e0",
        tile: "#272729",
        "tile-2": "#2a2a2c",
        "tile-3": "#252527",
      },
    },
  },
  plugins: [],
};
