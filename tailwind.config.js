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
        "7p": "7%",
        "13p": "13%",
        "23p": "23%",

        "2w": "2vw",
        "4w": "4vw",
      },

      colors: {
        "theme-start": "#F8714B",
        "theme-end": "#F2A649", //...-To
        "theme-sub": "#F58B4A", //Main
      },

      fontSize: {
        1.8: "1.8vw",
        1.25: "1.25vw",
      },

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
