import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
    // Define os breakpoints personalizados
    screens: {

      'xxs': '250px',

      'xs': '300px',
      // => @media (min-width: 300px) { ... }

      's': '427px',
      
      'ss': '559px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lgg': '1150px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.054rem',
    },
    colors: {
      'bluelite': '#139CFFFF',
      'footer-bg': '#001c2f',
      'P-white': '#D9D9D9',
      'BackgroundR': '#323B5C',
      'BackgroundL': '#212537',
      'PPurple-medium': '#2C3A75',
      'PDark': '#20264B',
      'PCinza': '#A6AAAE',
      'slate-800': '#1e293b',
      'slate-950': '#020617',
      'sky-600': '#0ea5e9'
    },
    fontFamily: {
      mono: ['JetBrains Mono']
    },
    borderRadius: {
      'none': '0',
      '2xl': '1.2rem',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
  },
  plugins: [
    flowbitePlugin
  ],
}
