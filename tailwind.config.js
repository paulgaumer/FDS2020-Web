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
        eduDark: '#C8C2F7',
        eduLight: '#F6F5FF',
        sectionBackground: '#F5F5F5',
        mapLink: '#FE4B8D',
        mapLinkHover: '#FE6BA1',
        mapBackground: '#23153D',
      },
      fontSize: {
        '7xl': '4.5rem',
      },
      inset: {
        '-6': '-1.5rem',
        '-4': '-1rem',
      },
      width: {
        fdsMax: '70rem',
      },
      maxWidth: {
        '8xl': '91.25rem',
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
        '3/4': '75%',
        '4/5': '80%',
        '11/12': '91.666667%',
      },
      zIndex: {
        '100': '100',
      },
      screens: {
        '2xl': '1920px',
        '3xl': '2560px',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
