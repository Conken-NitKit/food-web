//https://fwywd.com/tech/next-tailwind より

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "360px": "360px",

        "7%": "7%",
        "9%": "9%",
        "11%": "11%",
        "13%": "13%",
      },

      borderRadius: {},

      colors: {
        "theme-start": "#F8714B",
        "theme-end": "#F2A649",
        "theme-sub": "#F58B4A",
        letter: "#2D0D0D",
      },

      fontSize: {
        "28px": "26px",
      },

      lineHeight: {
        1.17: "1.17",
      },
    },
  },
  plugins: [],
};
