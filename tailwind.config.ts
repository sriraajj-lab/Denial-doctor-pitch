import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2332',
          50: '#f0f3f8',
          100: '#d9dde8',
          200: '#b3bbd1',
          300: '#8d99ba',
          400: '#6777a3',
          500: '#1A2332',
          600: '#151d2a',
          700: '#101722',
          800: '#0b111a',
          900: '#060b12',
        },
        cyan: {
          DEFAULT: '#00D4FF',
          50: '#e0faff',
          100: '#b3f2ff',
          200: '#80e9ff',
          300: '#4de0ff',
          400: '#1ad7ff',
          500: '#00D4FF',
          600: '#00aacc',
          700: '#008099',
          800: '#005566',
          900: '#002b33',
        },
        violet: {
          DEFAULT: '#7C3AED',
          50: '#f3eefc',
          100: '#d8c9f7',
          200: '#bda4f2',
          300: '#a27fed',
          400: '#875ae8',
          500: '#7C3AED',
          600: '#632ee6',
          700: '#4a22df',
          800: '#3116d8',
          900: '#180ad1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
