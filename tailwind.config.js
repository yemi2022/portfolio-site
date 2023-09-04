/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { background: '#4e4e4e00' },
          '100%': { background: '#4e4e4ed0' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.3s ease-in-out',
      }
    },
    screens: {
      'sm': {'max': '950px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'tb': {'max': '1023px'},

      'lg': {'min': '1024px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}