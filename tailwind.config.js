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
        "5p": "5%",
        "9p": "9%",
        "13p": "13%",
        "23p": "23%",

        "2w": "2vw",
        "4w": "4vw",
      },

      colors: {
        "co-m-f": "#F8714B", //COlor-SideBar-From
        "co-m-t": "#F2A649", //...-To
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
