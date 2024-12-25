/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['14px', '16px'],
      sm: ['16px', '20px'],
      base: ['18px', '20px'],
      lg: ['20px', '24px'],
      xl: ['24px', '30px'],
      '2xl': ['30px', '50px'],
      '3xl': ['36px', '60px'],
      '4xl': ['40px', '60px'],
    },
    extend: {
      colors: {
        'white': '#FFFCFC',
        'pure-white': '#FFFFFF',
        'primary': '#FFC291',
        'secondary': '#FFECDE',
        'accent-orange': '#FF8A2A',
        'accent-orange-hover': '#F66F00',
        'accent-blue': '#3468C0',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}




