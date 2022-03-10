//https://fwywd.com/tech/next-tailwind より

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "5/100": "5%",
        "23/100": "23%",
      },

      colors: {
        "co-sb-b": "#F8714B", //COlor-SideBar-Bottom
        "co-sb-t": "#F2A649", //...-Top
      },
    },
  },
  plugins: [],
};
