const ruleTester = require('./ruleTester')
const rule = require('../rules/pascal-case-type-name')

ruleTester.run('pascal-case-type-name', rule, {
  valid: [
    {
      code: `
        type FooType = string | number
      `,
    },
    {
      code: `
        enum FooBar {}
      `,
    },
    {
      code: `
        type FooType = {
          fooMyVar: string
          barMyVar: number
        }
      `,
    },
  ],
  invalid: [
    {
      code: `
        type fooType = string | number
      `,
      output: `
        type FooType = string | number
      `,
      errors: [{ message: 'Type\'s first charactor must be upper case.' }],
    },
  ]
})
