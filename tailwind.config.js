/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        main: '#a388ee',
        mainAccent: '#9e66ff', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
  
        // light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#1D1F27',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
      },
      borderRadius: {
        base: '16px'
      },
      boxShadow: {
        light: '4px 3px 0px 0px #000',
        dark: '4px 3px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '3px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-3px',
      },
      fontWeight: {
        base: '500',
        heading: '900',
      },
      fontFamily: {
        base: ['var(--font-teko)'],
        sans: ['var(--font-inter)'],
        heading: ['var(--font-jetbrainsMono)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
}