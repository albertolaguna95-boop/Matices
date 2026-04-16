import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores del branding de Matices
        "matices-negro":  "#0A0A0A",   // Fondo principal
        "matices-dorado": "#C9A84C",   // Detalles y acentos
        "matices-beige":  "#E8DCC8",   // Texto secundario
        "matices-blanco": "#FFFFFF",   // Texto principal
      },
      fontFamily: {
        // Tipografía elegante para el restaurante
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
