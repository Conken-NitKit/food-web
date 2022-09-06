module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      white: {
        a100: "#FFFFFF",
        a95: "rgba(255, 255, 255, .95)",
        a90: "rgba(255, 255, 255, .9)",
        a50: "rgba(255, 255, 255, .5)",
        a40: "rgba(255, 255, 255, .4)",
        a35: "rgba(255, 255, 255, .35)",
        a32: "rgba(255, 255, 255, .32)",
        a20: "rgba(255, 255, 255, .2)",
        a16: "rgba(255, 255, 255, .16)",
        a10: "rgba(255, 255, 255, .1)",
      },
      whitesmoke: {
        a100: "#F6F6F6",
        a95: "rgba(246, 246, 246, .95)",
        a90: "rgba(246, 246, 246, .9)",
        a50: "rgba(246, 246, 246, .5)",
        a40: "rgba(246, 246, 246, .4)",
        a35: "rgba(246, 246, 246, .35)",
        a32: "rgba(246, 246, 246, .32)",
        a20: "rgba(246, 246, 246, .2)",
        a16: "rgba(246, 246, 246, .16)",
        a10: "rgba(246, 246, 246, .1)",
      },
      lightgray: {
        a100: "#E5E5E5",
        a95: "rgba(229, 229, 229, .95)",
        a90: "rgba(229, 229, 229, .9)",
        a50: "rgba(229, 229, 229, .5)",
        a40: "rgba(229, 229, 229, .4)",
        a35: "rgba(229, 229, 229, .35)",
        a32: "rgba(229, 229, 229, .32)",
        a20: "rgba(229, 229, 229, .2)",
        a16: "rgba(229, 229, 229, .16)",
        a10: "rgba(229, 229, 229, .1)",
      },
      gray: {
        a100: "#998888",
        a95: "rgba(153, 136, 136, .95)",
        a90: "rgba(153, 136, 136, .9)",
        a50: "rgba(153, 136, 136, .5)",
        a40: "rgba(153, 136, 136, .4)",
        a35: "rgba(153, 136, 136, .35)",
        a32: "rgba(153, 136, 136, .32)",
        a20: "rgba(153, 136, 136, .2)",
        a16: "rgba(153, 136, 136, .16)",
        a10: "rgba(153, 136, 136, .1)",
      },
      brown: {
        a100: "#2D0D0D",
        a95: "rgba(45, 13, 13, .95)",
        a90: "rgba(45, 13, 13, .9)",
        a50: "rgba(45, 13, 13, .5)",
        a40: "rgba(45, 13, 13, .4)",
        a35: "rgba(45, 13, 13, .35)",
        a32: "rgba(45, 13, 13, .32)",
        a20: "rgba(45, 13, 13, .2)",
        a16: "rgba(45, 13, 13, .16)",
        a10: "rgba(45, 13, 13, .1)",
      },
      red: {
        a100: "#E8521E",
        a95: "rgba(232, 82, 30, .95)",
        a90: "rgba(232, 82, 30, .9)",
        a50: "rgba(232, 82, 30, .5)",
        a40: "rgba(232, 82, 30, .4)",
        a35: "rgba(232, 82, 30, .35)",
        a32: "rgba(232, 82, 30, .32)",
        a20: "rgba(232, 82, 30, .2)",
        a16: "rgba(232, 82, 30, .16)",
        a10: "rgba(232, 82, 30, .1)",
      },
      pink: {
        a100: "#E5A3B0",
        a95: "rgba(229, 163, 176, .95)",
        a90: "rgba(229, 163, 176, .9)",
        a50: "rgba(229, 163, 176, .5)",
        a40: "rgba(229, 163, 176, .4)",
        a35: "rgba(229, 163, 176, .35)",
        a32: "rgba(229, 163, 176, .32)",
        a20: "rgba(229, 163, 176, .2)",
        a16: "rgba(229, 163, 176, .16)",
        a10: "rgba(229, 163, 176, .1)",
      },
      green: {
        a100: "#87B5A3",
        a95: "rgba(135, 181, 163, .95)",
        a90: "rgba(135, 181, 163, .9)",
        a50: "rgba(135, 181, 163, .5)",
        a40: "rgba(135, 181, 163, .4)",
        a35: "rgba(135, 181, 163, .35)",
        a32: "rgba(135, 181, 163, .32)",
        a20: "rgba(135, 181, 163, .2)",
        a16: "rgba(135, 181, 163, .16)",
        a10: "rgba(135, 181, 163, .1)",
      },
      yellow: {
        a100: "#F2A649",
        a95: "rgba(242, 166, 73, 95)",
        a90: "rgba(242, 166, 73, 90)",
        a50: "rgba(242, 166, 73, 50)",
        a40: "rgba(242, 166, 73, 40)",
        a35: "rgba(242, 166, 73, 35)",
        a32: "rgba(242, 166, 73, 32)",
        a20: "rgba(242, 166, 73, 20)",
        a16: "rgba(242, 166, 73, 16)",
        a10: "rgba(242, 166, 73, 10)",
      },
      orange: {
        a100: "#F8714B",
        a95: "rgba(248, 113, 75, .95)",
        a90: "rgba(248, 113, 75, .9)",
        a50: "rgba(248, 113, 75, .5)",
        a40: "rgba(248, 113, 75, .4)",
        a35: "rgba(248, 113, 75, .35)",
        a32: "rgba(248, 113, 75, .32)",
        a20: "rgba(248, 113, 75, .2)",
        a16: "rgba(248, 113, 75, .16)",
        a10: "rgba(248, 113, 75, .1)",
      },
    },
    extend: {
      backgroundColor: (theme) => ({
        "primary-regular": theme("colors.white.a100"),
        "secondary-regular": theme("colors.whitesmoke.a100"),
        "secondary-dark-regular": theme("colors.lightgray.a100"),
        "thirdly-regular": theme("colors.gray.a100"),
        "accent-primary-regular": theme("colors.red.a100"),
        "reject-regular": theme("colors.pink.a100"),
      }),
      textColor: (theme) => ({
        "primary-inverted": theme("colors.white.a100"),
        "secondary-regular": theme("colors.gray.a100"),
        "primary-regular": theme("colors.brown.a100"),
        "reject-regular": theme("colors.pink.a100"),
        "complete-regular": theme("colors.green.a100"),
      }),
      backgroundImage: {
        "accent-gradient-primary": "linear-gradient(#F8714B, #F2A649)",
      },
      borderColor: (theme) => ({
        "primary-regular": theme("colors.gray.a100"),
      }),
      fontFamily: {
        "menu-card": "lato",
      },
      colors: {
        "theme-sub": "#F58B4A",
        "on-sale": "#FFDEB5",
        edit: "#FFBC0D",
      },
      lineHeight: {
        basic: "1.17",
      },
    },
  },

  plugins: [],
};
