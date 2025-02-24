/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#12ae95',
          dark: '#0b7968',
        },
        background: {
          dark: '#00020e',
          darker: '#15171b',
        },
        success: '#28a745',
        error: '#dc3545',
        promotion: '#D2122E',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'medium': '0 6px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};