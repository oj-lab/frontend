/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "--content-background": "#f2f5f8",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "--content-background": "#1a202c",
        },
      },
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  theme: {
    keyframes: {
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
    },
    animation: {
      fadeOut: "fadeOut 0.2s ease-out forwards",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            margin: "0", // 设置全局 margin 为 0
            "h1, h2, h3, h4, h5, h6": {
              marginTop: theme("spacing.6"),
              marginBottom: theme("spacing.4"),
            },
            p: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.2"),
            },
          },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
