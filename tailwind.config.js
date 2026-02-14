export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        "century-gothic": ["Century Gothic", "sans-serif"],
      },
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: "#00f2ff", // Main cyan
          light: "#33f4ff",
          dark: "#00d9e6",
        },
        secondary: {
          DEFAULT: "#7000ff", // Purple accent
          light: "#8c33ff",
          dark: "#5c00d9",
        },
        // Background Colors
        background: {
          DEFAULT: "#020205", // Main dark background
          card: "#10131a", // Card background
          "card-dark": "#0a0d14", // Darker card background
        },
        // Text Colors
        text: {
          primary: "#e0e0ff", // Main text color
          secondary: "#ffffff", // White text
          muted: "#e0e0ff", // Muted text (80% opacity)
        },
        // Border Colors
        border: {
          primary: "#00f2ff", // Primary cyan border
          secondary: "#7000ff", // Secondary purple border
          muted: "#00f2ff", // Muted border (20-40% opacity)
        },
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        sm: ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        base: ["1rem", { lineHeight: "1.7", letterSpacing: "0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.4", letterSpacing: "0.005em" }],
        "3xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "0.005em" }],
        "4xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "0.005em" }],
        "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "0.005em" }],
      },
      opacity: {
        5: "0.05",
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
        95: "0.95",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
