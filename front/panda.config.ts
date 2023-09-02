import {defineConfig} from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      colors: {
        primary: {value: '#0FEE0F'},
        white: {value: '#fafafd'},
        black: {value: '#0c0b0b'},
        background: {value: '#171925'},
        pink: {value: '#F8BBED'},
        deeppink: {value: '#FF94E7'},
        skyblue: {value: '#4F8BEC'},
        orange: {value: '#FF8F3E'},
        gray: {value: '#77777C'},
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
