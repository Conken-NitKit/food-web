module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "theme-start": "#F2A649",
        "theme-end": "#F8714B",
        "theme-sub": "#F58B4A",
        letter: "#2D0D0D",
        dash: "#998888",
      },

      lineHeight: {
        basic: "1.17",
      },
    },
  },

  plugins: [],
};
