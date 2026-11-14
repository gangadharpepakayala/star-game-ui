/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'jungle-bg': '#EAF4DF',
        'jungle-surface': '#C5DDB0',
        'jungle-green': '#477A45',
        'jungle-dark': '#244D32',
        'jungle-cream': '#FFF5D9',
        'jungle-gold': '#D9A441',
        'jungle-text': '#263D2A',
        'jungle-muted': '#687B63',
      },
      fontFamily: {
        jungle: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'jungle': '0 10px 25px -5px rgba(36, 77, 50, 0.15), 0 8px 10px -6px rgba(36, 77, 50, 0.1)',
        'jungle-lg': '0 20px 30px -10px rgba(36, 77, 50, 0.25)',
        'gold-glow': '0 0 25px rgba(217, 164, 65, 0.45)',
      }
    },
  },
  plugins: [],
}
