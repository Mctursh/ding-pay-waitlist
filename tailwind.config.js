/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    screens: {
      'desktop-above': { 'min': '1536px' },
      'desktop': { 'max': '1440px' },
    },
    colors: {
      'white': '#ffffff',
      'primary': '#6867E2',
      'black': '#000000',
      'light-grey': '#F9FAFB'
    }
  },
  plugins: [],
}

