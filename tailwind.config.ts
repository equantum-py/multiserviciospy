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
          50: "#fff9e6",
          100: "#fff0b8",
          400: "#f7c948",
          500: "#f2b705",
          600: "#d89f00",
        },
        ink: "#1d2a22",
        soft: "#f7f4ec",
      },
      boxShadow: {
        card: "0 12px 30px rgba(28, 42, 34, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
