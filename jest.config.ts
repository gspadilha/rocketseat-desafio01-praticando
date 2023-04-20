import type { Config } from 'jest';

const config: Config = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: { '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest' },
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/test/jest/__mocks__/styleMock.ts',
    '\\.(jpg|jpeg|png|gif|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/jest/__mocks__/fileMock.ts',
  },

  testEnvironment: 'jsdom',
};

export default config;
