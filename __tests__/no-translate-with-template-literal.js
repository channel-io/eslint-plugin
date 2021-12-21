const ruleTester = require('./ruleTester')
const rule = require('../rules/no-translate-with-template-literal')

ruleTester.run('no-translate-with-template-literal', rule, {
  valid: [
    {
      code: `translate('my.foo.key')`,
    },
    {
      code: `
        const TRANSLATE_KEY = 'my.foo.key'
        
        const translated = translate(TRANSLATE_KEY)
      `,
    },
    {
      code: `
        const TRANSLATE_KEY = 'my.foo.key'
        
        const translated1 = i18n(TRANSLATE_KEY)
        const translated2 = t(TRANSLATE_KEY)
      `,
      options: [{ translateFuncNames: ['t', 'i18n'] }]
    },
  ],
  invalid: [
    {
      code: 'translate(`my.foo.${first}`)',
      errors: [{ message: 'Do not call translation method with template literal.' }],
    },
    {
      code: 'translate(`my.foo.${second}.${third}`)',
      errors: [{ message: 'Do not call translation method with template literal.' }],
    },
    {
      code: 'translate(`my.foo.${second}.${third}.fourth`)',
      errors: [{ message: 'Do not call translation method with template literal.' }],
    },
    {
      code: `
        someItems.map((item) => ${'translate(`my.foo.${item.type}`)'})
      `,
      errors: [{ message: 'Do not call translation method with template literal.' }],
    },
  ],
})
