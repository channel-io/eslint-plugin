const ruleTester = require('./ruleTester')
const rule = require('../rules/pascal-case-interface-name')

ruleTester.run('pascal-case-interface-name', rule, {
  valid: [
    {
      code: `
        interface Foo {}
      `,
    },
    {
      code: `
        interface FooBar {}
      `,
    },
  ],
  invalid: [
    {
      code: `
        interface foo {}
      `,
      output: `
        interface Foo {}
      `,
      errors: [{ message: 'Interface\'s first charactor must be upper case.' }],
    },
    {
      code: `
        interface fooBar {}
      `,
      output: `
        interface FooBar {}
      `,
      errors: [{ message: 'Interface\'s first charactor must be upper case.' }],
    },
    {
      code: `
        interface IFooBar {}
      `,
      output: `
        interface FooBar {}
      `,
      errors: [{ message: 'There should be no \'I\' prefix.' }],
    },
  ]
})
