const plugin = require("tailwindcss/plugin");
const containerPlugin = require("./tailwind.container-plugin");

const { screens } = require("./src/theme/responsive");

module.exports = {
  mode: "jit",
  purge:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        md: "2rem",
        lg: "5rem",
      },
    },
    screens,
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [require("@tailwindcss/typography"), plugin(containerPlugin())],
};
