module.exports = {
  testEnvironment: 'jsdom', // que ambiente
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // para não passar por aqui.
  collectCoverage: true, // Testa se esta cobrindo tudo,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
