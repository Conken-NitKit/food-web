//https://fwywd.com/tech/next-tailwind より

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "2p": "2%",
        "3p": "3%",
        "4p": "4%",
        "5p": "5%",
        "6p": "6%",
        "7p": "7%",
        "9p": "9%",
        "13p": "13%",
        "23p": "23%",
        "72p": "72%",

        "2w": "2vw",
        "4w": "4vw",
      },

      colors: {
        "theme-start": "#F8714B",
        "theme-end": "#F2A649",
        "theme-sub": "#F58B4A",
        letter: "#2D0D0D",
      },

      fontSize: {},

      lineHeight: {
        1.172: "1.172",
      },

      borderRadius: {
        1: "1vw",
      },
    },
  },
  plugins: [],
};
