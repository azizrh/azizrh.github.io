/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./tanjung-coffee.html", "./ima-tanjung-coffee.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#2a2a2a',
        'secondary-bg': '#333333',
        'text-primary': '#ffffff',
        'text-secondary': '#bfbfbf',
        'accent': '#64ffda',
        'accent-dim': 'rgba(100, 255, 218, 0.1)',
      },
      fontFamily: {
        'hack': ['Hack', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
