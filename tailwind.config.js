/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        looping: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(calc(-1 * (136px * 8 + 20px * 7)))',
          },
        },
      },
      animation: {
        looping: 'looping 50s linear infinite',
      },
    },
  },
  plugins: [],
};
