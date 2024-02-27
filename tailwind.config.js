// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin')
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '380px',
      "3xl": '1920px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "dark": {
          light: "#475569",
          DEFAULT: "#334158",
          dark: "#1e293b"
        },
        "light": {
          light: "",
          DEFAULT: "#d1d5db",
          dark: ""
        }
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}