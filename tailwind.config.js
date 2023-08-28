/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      // we have to define flex for medium or diffrent screens
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      // color are available to you
      colors: {
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12,88%,69%)',
        brightRedSuperLight: 'hsl(12,88%,95%)',
          darkBlue: 'hsl(288,39%,23%)',
          darkGrayishBlue: 'hsl(227,12%,61%)',

      }

    },
  },
  plugins: [],
}

