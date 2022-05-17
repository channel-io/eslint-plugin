const ruleTester = require('./ruleTester')
const rule = require('../rules/prevent-destructured-argument-callback-in-intersection-observer')

ruleTester.run('prevent-destructured-argument-callback-in-intersection-observer', rule, {
  valid: [
    {
      code: `
        const observer = new IntersectionObserver((entries) => {
          something()
        })
      `,
    },
    {
      code: `
        const observer = new IntersectionObserver(function (entries) {
          something()
        })
      `,
    },
    {
      code: `
        const observer = new IntersectionObserver((e) => {
          something()
        }, { root: foo })
      `,
    },
    {
      code: `
        new IntersectionObserver((e) => {
          something()
        }, { root: foo }).observe(bar)
      `,
    }
  ],
  invalid: [
    {
      code: `
        const observer = new IntersectionObserver(([entry]) => {
          something()
        })
      `,
      errors: [{ message: 'IntersectionObserver\'s callback should not destructure argument. Callback\'s `entries` argument can have multi value even observe only one element.' }],
    },
    {
      code: `
        const observer = new IntersectionObserver(function ([entry]) {
          something()
        })
      `,
      errors: [{ message: 'IntersectionObserver\'s callback should not destructure argument. Callback\'s `entries` argument can have multi value even observe only one element.' }],
    },
    {
      code: `
        const observer = new IntersectionObserver(([e]) => {
          something()
        }, { root: foo })
      `,
      errors: [{ message: 'IntersectionObserver\'s callback should not destructure argument. Callback\'s `entries` argument can have multi value even observe only one element.' }],
    },
    {
      code: `
        new IntersectionObserver(([e]) => {
          something()
        }, { root: foo }).observe(bar)
      `,
      errors: [{ message: 'IntersectionObserver\'s callback should not destructure argument. Callback\'s `entries` argument can have multi value even observe only one element.' }],
    }
  ]
})