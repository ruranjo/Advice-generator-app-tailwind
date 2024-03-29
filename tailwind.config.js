/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Layout
      screens: {
        'mobile': {'max': '330px'},
        'desktop-md': '1024px', // Agrega un tamaño de pantalla personalizado llamado 'desktop-md'
        'desktop-lg': '1280px', // Agrega un tamaño de pantalla personalizado llamado 'desktop-lg'
      },
      maxWidth: {
        'mobile': '375px',
        'desktop': '1440px',
      },

      // Colors
      colors: {
        'primary-light-cyan': 'hsl(193, 38%, 86%)',
        'primary-neon-green': 'hsl(150, 100%, 66%)',
        'neutral-grayish-blue': 'hsl(217, 19%, 38%)',
        'neutral-dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'neutral-dark-blue': 'hsl(218, 23%, 16%)',
      },

      // Typography
      fontSize: {
        'body-copy': '28px',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        '800': 800,
      },
    },
  },
  plugins: [],
}

