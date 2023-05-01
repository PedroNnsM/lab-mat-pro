/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop-tight': '1366px',
        mobile: { min: '320px', max: '767px' },
        'sm-mid': '480px',
        sm: '640px',
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px', max: '1365px' },
      },
    },
  },
  plugins: [],
};
