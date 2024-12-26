/** @type {import('tailwindcss').Config} */
export default {
  content: [`./views/**/*.pug`],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        purple: "#540D6E",
        pink: "#EE4266",
        yellow: "#FFD32F",
        grayBg: "#F3FCF0",
        green: "#1F271B",
      },
    },
  },
  plugins: [],
};
