const { RuleTester } = require('eslint')

module.exports = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
})
