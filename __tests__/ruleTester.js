const { RuleTester } = require('eslint')
const typescriptParser = require.resolve('@typescript-eslint/parser')

module.exports = new RuleTester({
  parser: typescriptParser,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
})
