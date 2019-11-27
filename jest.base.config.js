module.exports = {
  testURL: 'http://localhost/',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
      '<rootDir>/setup-jest.ts'
  ],
  setupFiles: [
      '<rootDir>/src/tests/globals-test.ts'
    ],
  transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  moduleFileExtensions: [
      'ts',
      'js',
      'html',
      'json'
  ],
  moduleNameMapper: {
      '^hpen-jsonapi/(?!db)(.*)': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: [
      'node_modules/(?!hpen-jsonapi)'
  ],
  modulePathIgnorePatterns: [
      'dist',
      'node_modules/hpen-jsonapi'
  ]
};
