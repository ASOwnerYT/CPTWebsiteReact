/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: '1rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

