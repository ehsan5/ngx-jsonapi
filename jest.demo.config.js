const baseConfig = require('./jest.base.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/demo'],
  modulePaths: ['<rootDir>/dist'],
  moduleNameMapper: {
      'hpen-jsonapi': '<rootDir>/dist'
  },
  coveragePathIgnorePatterns: [
      '/node_modules/',
      '/src/*.*/'
  ],

  globals: {
      'ts-jest': {
          tsConfigFile: 'demo/tsconfig.spec.json'
      },
      stringifyContentPathRegex: true
  },
};
