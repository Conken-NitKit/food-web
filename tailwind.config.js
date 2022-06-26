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
        "5p": "5%",
        "6p": "6%",
        "9p": "9%",
        "72p": "72%",

        "2w": "2vw",

        "2h": "2vh",
        "3h": "3vh",
        "4h": "4vh",
        "5h": "5vh",
        "30h": "30vh",
      },

      colors: {
        "theme-start": "#F8714B",
        "theme-end": "#F2A649",
        "theme-sub": "#F58B4A",
        letter: "#2D0D0D",
      },

      fontSize: {
        "1.6h": "1.6vh",
        "2.3h": "2.3vh",
        "3h": "3vh",
      },

      lineHeight: {
        1.17: "1.17",
      },

      borderRadius: {
        "1h": "1vh",
      },
    },
  },
  plugins: [],
};
