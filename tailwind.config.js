module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'login-bg': "url('/src/assets/bg.jpg')",
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        primary: '#ec5200',
      }),
      colors: {
        primary: '#ec5200',
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#ec5200',
        danger: '#e3342f',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
  ],
};
