/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        dropdown: 'dropdown .15s linear',
      },
      keyframes: {
        dropdown: {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      screens: {
        xs: '375px',
      },
      fontFamily: {
        inconsolata: ['Inconsolata'],
        inter: ['Inter'],
        lora: ['Lora'],
      },
      colors: {
        custom: {
          '050505': '#050505',
          '1F1F1F': '#1F1F1F',
          '2D2D2D': '#2D2D2D',
          '3A3A3A': '#3A3A3A',
          838383: '#838383',
          e9e9e9: '#e9e9e9',
          f4f4f4: '#f4f4f4',
          a445ed: '#a445ed',
          ff5252: '#ff5252',
        },
      },
    },
  },
  plugins: [],
};
