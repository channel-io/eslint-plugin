# eslint-plugin

## Installation
1. `$ npm install --dev @channel.io/eslint-plugin`

2. Edit `.eslintrc.js`

    ```js
    module.exports = {
      // ...
      plugins: ['@channel.io'],
      rules: {
        '@channel.io/no-classnames-with-one-argument': 'error',
        '@channel.io/hooks-deps-element-newline': 'warn'
      }
    }
    ```

## Docs
> Documents are written by Korean only.
- [hooks-deps-element-newline](./docs/hooks-deps-element-newline.md)
- [no-classnames-with-one-argument](./docs/no-classnames-with-one-argument.md)
- [no-translate-with-template-literal](./docs/no-translate-with-template-literal.md)
- [pascal-case-enum-name](./docs/pascal-case-enum-name.md)
- [pascal-case-interface-name](./docs/pascal-case-interface-name.md)
- [pascal-case-type-name](./docs/pascal-case-type-name.md)
- [prevent-destructured-argument-callback-in-intersection-observer](./docs/prevent-destructured-argument-callback-in-intersection-observer.md)

## See also
- https://github.com/channel-io/eslint-config
