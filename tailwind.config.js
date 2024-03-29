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
      "green-300": "#25D366",
      WHITE: "#fff",
    },
    extend: {
      screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
        'banner-jpg': "url('src/assets/img/ImagemBanner.jpg')",
        'banner-svg': "url('src/assets/img/ImagemBanner.svg')",
        'bg-img-dr': "url('src/assets/img/bgImgDr.png')",
        'bg-banner-apresentacao-1': "url('https://i.ibb.co/mTnK5C3/Apresenta-o-comercial.png')",
        'bg-banner-apresentacao-2': "url('https://i.ibb.co/M83PTKV/Apresenta-o-comercial3-1.png')",
      },
      boxShadow: {
        "3xl": "0px 0px 30px  rgba(0, 0, 0, 0.3)",
        "2.5xl": "0px 0px 10px  rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
