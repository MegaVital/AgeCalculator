/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '600px', 'min': '200px ' },
      // => @media (min-width: 640px) { ... } 

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '601px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontSize: {
      sm: '0.8rem',
      base: '0.6rem',
      xl: '1.25rem',
      'xs': '0.86rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '9xl': '5.5rem'
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.3em',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '150px',
      'large': '24px',
    },
    extend: {
      lineHeight: {

      },
      height: {
        '650': '650px',
        '72': '72px',
        '486': '486px',
        '13': '3.2rem'
      },
      width: {
        '85': '85px',
        '843': '843px',
        '160': '160px',
        '92vw': '92vw'
      },
      margin: {
        '15': '60px',
        '7.5': '30px'
      },
      colors: {
        'bg': '#f0f0f0',
        'violet': '#864cff',
        'textColor': '#898989'
      },
      spacing: {
        '52%': '52.5%',
        '45%': '45%',
        '42%': '42%',
        '47%': '47%',
        '56%': '56%',
      }
    },
  },
  plugins: [],
}