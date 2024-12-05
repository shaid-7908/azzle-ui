/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-text":
          "linear-gradient(90deg, #ff7eb3, #ff758c, #f9a8d4, #ff7eb3)",
      },
      animation: {
        "gradient-text": "gradientBG 3s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      fontFamily: {
        // Add your custom fonts
        dmSans: ["var(--font-DMSans)", "sans-serif"],
        clashDisplay: ["var(--font-clash-display)", "sans-serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
        spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["Inter", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
      },

      colors: {
        colorCodGray: "#191919",
        colorOrangyRed: "#03045e",
        colorLinenRuffle: "#caf0f8",
        colorViolet: "#321CA4",
        colorGreen: "#39FF14",
      },
    },
  },
  plugins: [],
};
