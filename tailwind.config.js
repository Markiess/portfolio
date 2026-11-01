/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter Variable", "Inter", "SF Pro Display", "system-ui", "sans-serif"],
        sans: ["Inter Variable", "Inter", "SF Pro Text", "system-ui", "sans-serif"],
      },
      colors: {
        action: "#2997ff",
        "action-focus": "#0077ed",
        "action-dark": "#2997ff",
        ink: "#f5f5f7",
        muted: "#a1a1a6",
        quiet: "#86868b",
        parchment: "#000000",
        pearl: "#161617",
        hairline: "rgba(255,255,255,.12)",
        tile: "#161617",
        "tile-2": "#1d1d1f",
        "tile-3": "#272729",
      },
    },
  },
  plugins: [],
};
