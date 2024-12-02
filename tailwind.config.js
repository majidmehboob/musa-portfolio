/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "loading-bar": "loadingBar 3s linear",
      },
      keyframes: {
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
   
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        neumorphic: "8px 8px 16px #c5c5c5, -8px -8px 16px #ffffff",
        neumorphicHover: "4px 4px 8px #c5c5c5, -4px -4px 8px #ffffff",
      },
    },
  },
  plugins: [],
};
