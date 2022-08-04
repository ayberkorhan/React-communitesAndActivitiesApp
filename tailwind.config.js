/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://cdn.netmotionsoftware.com/wp-content/uploads/most-frustrating-things-about-working-remotely-1.png')",
      }
    },
  },
  plugins: [],
}
