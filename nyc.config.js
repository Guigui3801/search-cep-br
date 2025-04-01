module.exports = {
    extends: '@istanbuljs/nyc-config-typescript',
    include: ['src/**/*.ts'],
    exclude: ['**/*.test.ts', '**/*.spec.ts'],
    all: true,
    reporter: ['lcov', 'text-summary'],
    extension: ['.ts'],
    cache: false
  };