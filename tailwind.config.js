/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "375px",
        md: "600px",
        lg: "976px",
        xl: "1280px",
        xxl: "1600px",
      },
      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
        mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        main: "rgba(255, 237, 204, 0.5)",
      },
      backgroundImage: {
        "home-hero": "url('/public/images/hero.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        primary: "#543EE0",
        secondary: "#111111",
        tetiary: "#D0D0D0",
      },
      maxWidth: {
        "8xl": "1600px",
      },
    },
  },
  plugins: [],
};
