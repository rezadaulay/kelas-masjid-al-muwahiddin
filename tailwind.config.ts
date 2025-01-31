import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#003e1e',
      'white': '#ffffff',
      'yellow': '#eab308',
      'light-gray': '#eeeeee',
      'gray-100': '#f3f4f6',
      'green-500': '#25d366',
      'green-600': '#16a34a',
      'red-500': '#FF0000'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

