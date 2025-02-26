/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/components-library/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    spacing: {
      'sm': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
    },
    extend: {},
  },
  plugins: [],
}
