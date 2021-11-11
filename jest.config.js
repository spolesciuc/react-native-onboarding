module.exports = {
  preset: 'react-native',
  testMatch: ['**/?(*.)+(spec|_spec_|_test_).[jt]s?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|concat-color-matrices|rn-color-matrices|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|static-container)',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/jest-native/extend-expect',
  ],
  testPathIgnorePatterns: ['<rootDir>/e2e', '<rootDir>/_examples'],
};
