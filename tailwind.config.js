/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // For Next.js 13 with app directory
    './pages/**/*.{js,ts,jsx,tsx}',  // For Next.js 12 and below (if using pages directory)
    './components/**/*.{js,ts,jsx,tsx}', // Include your components directory
    // Add any other paths where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};