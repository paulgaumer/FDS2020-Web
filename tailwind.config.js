const plugin = require('tailwindcss/plugin');

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
      fontSize: {
        '7xl': '4.5rem',
      },
      inset: {
        '-6': '-1.5rem',
        '-4': '-1rem',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '1/4': '25%',
      },
      zIndex: {
        '100': '100',
      },
    },
  },
  variants: {
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'focus-visible',
      'active',
      'group-hover',
    ],
    borderWidth: [
      'responsive',
      'hover',
      'focus',
      'focus-visible',
      'active',
      'group-hover',
    ],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-visible', 'active'],
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, e }) {
      addVariant('focus-visible', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `focus-visible${separator}${className}`
          )}[data-focus-visible-added]`;
        });
      });
    }),
  ],
};
