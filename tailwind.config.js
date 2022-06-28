//https://fwywd.com/tech/next-tailwind より

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-start": "#F8714B",
        "theme-end": "#F2A649",
        "theme-sub": "#F58B4A",
        letter: "#2D0D0D",
      },

      lineHeight: {
        1.17: "1.17",
      },
    },
  },
  plugins: [],
};
