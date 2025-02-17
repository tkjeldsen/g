module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  globals: {
    G: true,
  },

  rules: {
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    'no-param-reassign': 0,
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
  },
};
