import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          100: "#F5F5DC",
          200: "#E6E6C2",
          300: "#D2D2A8",
        },
        brown: {
          700: "#5C4033",
          800: "#4A3328",
        },
        green: {
          100: "#E8F5E9",
          200: "#C8E6C9",
          300: "#A5D6A7",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
