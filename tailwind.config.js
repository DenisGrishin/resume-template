/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkBlue: '#002b7f',
      orang: '#ff9d2c',
      grey: '#384347',
    },
    screens: {
      smallMobile: { max: '480px' },
      // => @media (min-width: 640px) { ... }

      mobile: { max: '768px' },
      // => @media (min-width: 768px) { ... }

      tablet: { max: '991px' },
      // => @media (min-width: 1024px) { ... }

      desktop: { max: '1280px' },
      // => @media (min-width: 1280px) { ... }
    },
  },
  extend: {},
  plugins: [],
};
