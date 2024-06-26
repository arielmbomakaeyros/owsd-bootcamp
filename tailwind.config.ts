import type { Config } from "tailwindcss";
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: ['class'],
  theme: {
    screens: {
      'largeMobile': '530px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'superDesktop': '1400px',
      'sm':	'640px', 
      // 'xl': '1280px',
    }, 
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, 

      colors: {
        dark: '#141719',
        white: '#ffffff',
        mainDark: '#212529',
        mainDarkLight: '#2B2E31',
        mainWhite: '#ffffff',
        primary: '#0094D9',
        danger: 'red',
        success: 'red',
        warning: 'red',
        bottomBarColor: '#212529', 
        brokenWhite: "#f7f5f2"
      },
    },
  },
  // plugins: [nextui()]
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    },
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: '#0094D9',
          },
        },
        dark: {
          // ...
          colors: {
            primary: '#0094D9',
          },
        },
        // ... custom themes
      },
    }),
  ],

};
export default config;
