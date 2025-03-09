/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom keyframes for gradient animation
      keyframes: {
        gradientText: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      // Add custom animation utility
      animation: {
        gradientText: 'gradientText 5s ease infinite',
      },
    },
  },
  plugins: [],
};