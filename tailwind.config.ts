import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff4eb",
          100: "#ffedd5",
          400: "#fb923c",
          500: "#f97316",
          600: "#c2410c",
        },
        ink: "#102a43",
        "ink-dark": "#0b1f33",
        soft: "#f6f8fa",
        muted: "#64748b",
        border: "#e2e8f0",
      },
      boxShadow: {
        card: "0 10px 28px rgba(15, 42, 67, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
