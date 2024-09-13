/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    colors: {
      body: '#e5e5e5',
      white: '#fff',
      green: {DEFAULT: '#539592', hover: '#40807d'},
      black: {DEFAULT: '#273029', heavy: '#1b211c'},
      grey: '#888888',
      orange: {
        DEFAULT: '#f2994a',
        hover: '#da863c'
      },
      outline: '#f1f1f1',
      pink: '#ffa5a5',
    },
    extend: {
      fontFamily:{
        lora: ['var(--font-lora)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        hero: 'url(/hero/bg.png)',
        menu: 'url(/menu/bg.png)',
        reservation: 'url(/reservation/bg.png)',
        footer: 'url(/footer/bg.png)',
      },
      boxShadow: {
        primary: '40px 4px 40px 0px rgba(68, 68, 68, 0.25)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}