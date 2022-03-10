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
        "13p": "13%",
        "23p": "23%",
      },

      colors: {
        "co-sb-b": "#F8714B", //COlor-SideBar-Bottom
        "co-sb-t": "#F2A649", //...-Top
      },
    },
  },
  plugins: [],
};
