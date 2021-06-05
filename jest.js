module.exports = {
  preset: 'jest-preset-angular',
  // testRunner: 'jest-jasmine2',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testURL: 'http://localhost',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
