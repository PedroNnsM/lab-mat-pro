/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "black-900": "#323232",
      "blue-900": "#183A5E",
      "blue-800": "#204E80",
      "blue-700": "#204E80",
      "blue-600": "#2D6DAF",
      "blue-500": "#357ECB",
      "blue-400": "#5E96D1",
      "grey-700": "#607993",
      "grey-600": "#7696B9",
      "grey-500": "#98A9BB",
      "grey-400": "#A8C7E9",
      "grey-300": "#CDDFF2",
      WHITE: "#fff",
    },
    extend: {
      screens: {
        "desktop-tight": "1366px",
        mobile: { min: "320px", max: "767px" },
        "sm-mid": "480px",
        sm: "640px",
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1365px" },
      },
      boxShadow: {
        "3xl": "0px 0px 30px  rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
