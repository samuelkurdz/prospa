module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        primary: '#FA4A84',
        secondary: '#1C1335',
        subText: '#8397AB',
        signup: '#7E51FF'
      },
      width: {
        '375': '375px',
      }
    },
    linearBorderGradients: theme => ({
      colors: theme('colors'),
      background: theme('colors'),
      }),
  },
  plugins: ['tailwindcss-border-gradient-radius'],
}