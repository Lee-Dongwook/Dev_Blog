import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,tsx,ts,md,mdx}"],
  darkMode: "class",
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(222 84% 56%)",
          foreground: "hsl(0 0% 100%)",
          50: "#eef4ff",
          600: "#2b57ff",
          700: "#1f43d6",
        },
        bg: {
          DEFAULT: "hsl(0 0% 100%)",
          dark: "hsl(224 15% 10%)",
        },
        text: {
          DEFAULT: "hsl(224 15% 12%)",
          dim: "hsl(224 8% 38%)",
          onDark: "hsl(0 0% 96%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: { prose: "72ch" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
