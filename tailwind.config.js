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
        "4p": "4%",
        "5p": "5%",
        "6p": "6%",
        "9p": "9%",
        "23p": "23%",
        "72p": "72%",

        "2w": "2vw",
        "4w": "4vw",

        "4h": "4vh",
      },

      colors: {
        "theme-start": "#F8714B",
        "theme-end": "#F2A649",
        "theme-sub": "#F58B4A",
        letter: "#2D0D0D",
      },

      fontSize: {
        "2.2w": "2.2vw",

        "2.3h": "2.3vh",
        "1.6h": "1.6vh",
      },

      lineHeight: {
        1.17: "1.17",
      },

      borderRadius: {
        1: "1vw",
      },
    },
  },
  plugins: [],
};
