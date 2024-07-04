/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        primary: "#1265E9",
        danger: "#FF7F51",
        purple: "#8758FF",
        line: "#F2F2F2",
      },
      fontFamily: {
        // 'inter': 'Inter'
      }
    },
  },
  plugins: [],
};
