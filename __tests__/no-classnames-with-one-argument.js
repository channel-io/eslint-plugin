const ruleTester = require('./ruleTester')
const rule = require('../rules/no-classnames-with-one-argument')

ruleTester.run('no-classnames-with-one-argument', rule, {
  valid: [
    {
      code: `
        import classNames from 'classnames'

        console.log(classNames('foo', 'bar'))
      `,
    },
    {
      code: `
        import classnames from 'classnames'

        const styles = { foo: 'foo', bar: 'baz' }
        console.log(classnames(styles.foo, styles.bar))
      `,
    },
    {
      code: `
        import foo from 'classnames'

        console.log(foo({ bar: true, baz: false }))
      `,
    },
    {
      code: `
        import classNames from 'another-module'

        console.log(classNames('foo'))
      `,
    },
  ],
  invalid: [
    {
      code: `
        import classNames from 'classnames'

        console.log(classNames('foo'))
      `,
      output: `
        import classNames from 'classnames'

        console.log('foo')
      `,
      errors: [{ message: 'Do not call classnames with only one argument.' }],
    },
    {
      code: `
        import classNames from 'classnames'

        const styles = { foo: 'bar' }
        console.log(classNames(styles.foo))
      `,
      output: `
        import classNames from 'classnames'

        const styles = { foo: 'bar' }
        console.log(styles.foo)
      `,
      errors: [{ message: 'Do not call classnames with only one argument.' }],
    },
  ]
})
