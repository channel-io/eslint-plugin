const ruleTester = require('./ruleTester')
const rule = require('../rules/hooks-deps-element-newline')

ruleTester.run('hooks-deps-element-newline', rule, {
  valid: [
    {
      code: `
        useEffect(() => {
          doSomething()
        }, [prop1])
      `,
    },
    {
      code: `
        useEffect(() => {
          doSomething()
        }, [
          prop1,
          prop2,
          prop3,
        ])
      `,
    },
  ],
  invalid: [
    {
      code: `
        useEffect(() => {
          doSomething()
        }, [
          prop1,
        ])
      `,
      output: `
        useEffect(() => {
          doSomething()
        }, [prop1])
      `,
      errors: [{ message: 'There should be no linebreak here.' }],
    },
    {
      code: `
        useEffect(() => {
          doSomething()
        }, [prop1, prop2, prop3])
      `,
      output: `
        useEffect(() => {
          doSomething()
        }, [
prop1, 
prop2, 
prop3,
])
      `,
      errors: 4,
    }
  ]
})
