//https://fwywd.com/tech/next-tailwind より

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "22.5/100": "22.5%",
      },
    },
  },
  plugins: [],
};
