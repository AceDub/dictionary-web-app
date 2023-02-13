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
          E9E9E9: '#E9E9E9',
          F4F4F4: '#F4F4F4',
          A445ED: '#A445ED',
          FF5252: '#FF5252',
          FAFAFA: '#FAFAFA',
        },
      },
    },
  },
  plugins: [],
};
