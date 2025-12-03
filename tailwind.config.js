/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F3',
        surface: '#F5F3ED',
        primary: '#556B2F', // Olive Green
        text: '#2F3E1F',    // Dark Green/Black
        textSecondary: '#5C6B4A',
        accent: '#8B9A5B',
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
        body: ['"Lora"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(47, 62, 31, 0.1)',
      }
    },
  },
  plugins: [],
}