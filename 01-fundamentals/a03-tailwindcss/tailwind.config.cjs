/* eslint-disable no-param-reassign */
const plugin = require('tailwindcss/plugin');

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  jit: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    data: {
      active: 'active~="true"', // data-active="true"
    },
    extend: {
      colors: {
        primary: '#74b9ff',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addVariant, e }) => {
      const newUtilities = {
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      };
      addUtilities(newUtilities);

      addVariant('logged-in', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `body.logged-in .${e(`logged-in${separator}${className}`)}`,
        );
      });

      // https://tailwindcss.com/docs/plugins#complex-variants
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}\\`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
