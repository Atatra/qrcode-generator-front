import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          200: "#F1F2F4",
          300: "#E5E5E5",
          700: "#ABABAB",
        },
      },
      fontFamily: {
        segoeui: ["var(--font-segoe-ui)"],
      },
    },
  },
  plugins: [],
};
export default config;
