module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
    },
    typography: {
      default: {
        css: {},
      },
    },
    extend: {
      colors: {
        primary: '#13F0BA',
        secondary: '#FDBF37',
        edu: '#EDEBFE',
        eduLight: '#F6F5FF',
        featured: '#EF4F5F',
        sectionBackground: '#F5F5F5',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
