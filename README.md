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
- [no-classnames-with-one-argument](./docs/no-classnames-with-one-argument.md)
- [hooks-deps-element-newline](./docs/hooks-deps-element-newline.md)
- [pascal-case-interface-name](./docs/pascal-case-interface-name.md)

## See also
- https://github.com/channel-io/eslint-config
