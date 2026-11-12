import type { Config } from "tailwindcss";

/**
 * Palet warna website — diambil dari `public/assets/color palette 3.jpg`:
 * Mother Earth #513229, Lucky Dice #F4F1E2, Something Blue #D8EBF9,
 * The Bay #FCE6B7, Walking Vinnie #D7D4B1.
 *
 * Skala `stone`, `amber`, `emerald`, dan warna aksen lainnya diturunkan dari
 * lima warna tersebut agar seluruh komponen otomatis memakai palet yang sama.
 */
const earth = {
  50: "#FAF7EC",
  100: "#ECE8D4",
  200: "#E8E3CE",
  300: "#D7D4B1",
  400: "#BEB998",
  500: "#796150",
  600: "#6B5040",
  700: "#5E3B2F",
  800: "#513229",
  900: "#40251D",
  950: "#2D1812",
};

const sage = {
  50: "#F7F6EA",
  100: "#EEEDDC",
  200: "#E4E2CC",
  300: "#D7D4B1",
  400: "#BEBE92",
  500: "#A2A473",
  600: "#7F8157",
  700: "#666846",
  800: "#4F5136",
  900: "#3B3D28",
  950: "#262717",
};

const butter = {
  50: "#FEF9EE",
  100: "#FCE6B7",
  200: "#F9DCA2",
  300: "#F4CF89",
  400: "#E9BC6C",
  500: "#D8A755",
  600: "#BD8B42",
  700: "#976B34",
  800: "#735027",
  900: "#52391D",
  950: "#312110",
};

const blue = {
  50: "#F0F7FD",
  100: "#E7F2FB",
  200: "#D8EBF9",
  300: "#C2DDF1",
  400: "#A9CBE6",
  500: "#89B0D2",
  600: "#4F7396",
  700: "#3C5C7A",
  800: "#2E475F",
  900: "#22374A",
  950: "#16232F",
};

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/data/**/*.{ts,tsx,json}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1E2",
        ink: "#513229",
        terracotta: {
          DEFAULT: "#513229",
          dark: "#40251D",
          light: "#ECE8D4",
        },
        gold: "#FCE6B7",
        forest: "#7F8157",
        whatsapp: {
          light: "#E9F9EF",
          DEFAULT: "#25D366",
          dark: "#0B7A4B",
        },
        linkedin: {
          light: "#E8F1FA",
          DEFAULT: "#0A66C2",
          dark: "#084F96",
        },
        stone: earth,
        amber: butter,
        emerald: sage,
        rose: blue,
        slate: blue,
        indigo: blue,
        cyan: butter,
        sky: blue,
        teal: blue,
        blue,
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        marquee: "marquee 42s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
