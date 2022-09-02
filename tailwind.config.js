module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "menu-card": "lato",
      },
      colors: {
        "theme-start": "#F2A649",
        "theme-end": "#F8714B",
        "theme-sub": "#F58B4A",
        "sold-label": "#E8521E",
        "sold-out": "#E5A3B0",
        "on-sale": "#FFDEB5",
        edit: "#FFBC0D",
        letter: "#2D0D0D",
        "letter-sub": "#998888",
        dash: "#998888",
      },

      lineHeight: {
        basic: "1.17",
      },
    },
  },

  plugins: [],
};
