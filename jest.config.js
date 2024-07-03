/** @type {import('jest').Config} */
export default {
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^.+\\.scss$': 'identity-obj-proxy',
    '^@/': '<rootDir>/src/',
  },
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
