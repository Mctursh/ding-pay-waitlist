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
      'desktop-range': { 'max': '1536px' },
      'desktop': { 'max': '1440px' },
      'laptop': { 'max': '1280px' },
      'ipad': { 'max': '1190px' },
      'tablet': { 'max': '1024px' },
      'phone': { 'max': '964px' },
      'android': { 'max': '768px' },
      'phablet': { 'max': '605px' },
      'iphone': { 'max': '460px' },
      'mini': { 'max': '370px' },
    },
    colors: {
      'white': '#ffffff',
      'primary': '#6867E2',
      'black': '#000000',
      'light-grey': '#F9FAFB',
      'secondary': '#4F4EAC'
    }
  },
  plugins: [],
}

