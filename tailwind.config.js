export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#00f2ff',
        secondary: '#7000ff',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
