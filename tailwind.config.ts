import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bright: "#E502C7",
        calm: "#E59102",
        fresh: "#02E520",
        modern: "#0255E5",
        inactive: "#696969",
      },
      gridTemplateColumns: {
        "game-board": "repeat(3, 30px)",
      },
      gridTemplateRows: {
        "game-board": "repeat(3, 30px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
