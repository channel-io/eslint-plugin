const ruleTester = require('./ruleTester')
const rule = require('../rules/pascal-case-enum-name')

ruleTester.run('pascal-case-enum-name', rule, {
  valid: [
    {
      code: `
        enum Foo {}
      `,
    },
    {
      code: `
        enum FooBar {}
      `,
    },
    {
      code: `
        enum FooBar {
          Error,
          Normal,
          Success,
        }
      `,
    },
  ],
  invalid: [
    {
      code: `
        enum foo {}
      `,
      output: `
        enum Foo {}
      `,
      errors: [{ message: 'Enum\'s first charactor must be upper case.' }],
    },
    {
      code: `
        enum fooBar {}
      `,
      output: `
        enum FooBar {}
      `,
      errors: [{ message: 'Enum\'s first charactor must be upper case.' }],
    },
    {
      code: `
        enum fooBar {
          error,
          normal,
          success,
        }
      `,
      output: `
        enum FooBar {
          Error,
          Normal,
          Success,
        }
      `,
      errors: [
        { message: 'Enum\'s first charactor must be upper case.' },
        { message: 'Enum member\'s first charactor must be upper case.' },
        { message: 'Enum member\'s first charactor must be upper case.' },
        { message: 'Enum member\'s first charactor must be upper case.' },
      ],
    },
    {
      code: `
        enum FooBar {
          Error,
          NORMAL,
          SUCCESS_NORMAL_1,
        }
      `,
      output: `
        enum FooBar {
          Error,
          Normal,
          SuccessNormal1,
        }
      `,
      errors: [
        { message: 'Enum member name must be pascal case.' },
        { message: 'Enum member name must be pascal case.' },
      ],
    },
  ]
})
