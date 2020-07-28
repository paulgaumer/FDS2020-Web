module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#33C8A3',
        secondary: '#FDBF37',
        edu: '#EDEBFE',
        eduLight: '#F6F5FF',
        featured: '#EF4F5F',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
