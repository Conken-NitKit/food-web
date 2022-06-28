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

        "2p": "2%",
        "5p": "5%",
        "6p": "6%",
        "9p": "9%",
        "13%": "13%",

        "2w": "2vw",

        "2h": "2vh",
        "3h": "3vh",
        "4h": "4vh",
        "5h": "5vh",
      },

      borderRadius: {
        "1h": "1vh",
      },

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
