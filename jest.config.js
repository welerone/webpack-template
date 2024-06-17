/* eslint-disable */
/** @type {import('jest').Config} */
module.exports = {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^.+\\.scss$': 'identity-obj-proxy',
    '^@/': '<rootDir>/src/',
  },
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};
