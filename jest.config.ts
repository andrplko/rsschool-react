import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: import('jest').Config = {
  clearMocks: true,
  collectCoverageFrom: ['./src/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    './src/utils/fonts.ts',
    './src/constants/index.ts',
    './src/pages/_app.tsx',
    './src/pages/_document.tsx',
  ],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
};

export default createJestConfig(config);
