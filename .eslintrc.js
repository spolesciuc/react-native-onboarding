module.exports = {
  root: true,
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react-hooks', 'sort-imports-es6-autofix'],
  ignorePatterns: ['lib/*'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react-native/no-inline-styles': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
};
