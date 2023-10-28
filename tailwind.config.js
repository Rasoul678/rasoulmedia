/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: "2px",
      },
      backgroundOpacity: {
        7: "0.07",
      },
      fontFamily: {
        iransans: ["var(--font-iransans)"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        "primary-yellow": "#ffe082"
      },
    },
  },
  plugins: [],
};
