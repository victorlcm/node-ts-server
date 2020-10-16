/* eslint-disable */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/tests/setupTests.ts'],
  testPathIgnorePatterns: ['.d.ts', '.js'],
};