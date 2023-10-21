import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'eb-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['Noto Serif',  ...defaultTheme.fontFamily.serif],
      mono: ['Noto Mono',  ...defaultTheme.fontFamily.mono],
      display: ['Noto Serif Display',  ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}

