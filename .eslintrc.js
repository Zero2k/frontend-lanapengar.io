module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'jsx-quotes': 0,
    'comma-dangle': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-underscore-dangle': 0,
    'max-len': 0,
    'prefer-stateless-function': 0,
    'arrow-parens': 0
  },
  parser: 'babel-eslint'
};
