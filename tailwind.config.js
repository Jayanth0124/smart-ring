/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        espresso: {
          50:  '#FDFBF7',
          100: '#F5F0E8',
          200: '#E8DECE',
          300: '#D7CCC8',
          400: '#BCAAA4',
          500: '#8D6E63',
          600: '#6D4C41',
          700: '#4E342E',
          800: '#3E2723',
          900: '#2C1810',
        },
      },
    },
  },
  plugins: [],
};
