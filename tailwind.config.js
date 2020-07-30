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
        map: '#33C8A3',
        secondary: '#FDBF37',
        featured: '#EF4F5F',
        edu: '#EDEBFE',
        eduLight: '#F6F5FF',
        sectionBackground: '#F5F5F5',
        mapLink: '#FE4B8D',
        mapLinkHover: '#FE6BA1',
        mapBackground: '#23153D',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
