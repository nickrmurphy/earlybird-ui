import preset from './lib/earlybirdpreset';

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'eb-',
  content: [
    "./index.html",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  presets: [preset]
}

