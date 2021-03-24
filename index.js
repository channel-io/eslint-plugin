const noClassnamesWithOneArgument = require('./rules/no-classnames-with-one-argument')
const hooksDepsElementNewline = require('./rules/hooks-deps-element-newline')

module.exports = {
  rules: {
    'no-classnames-with-one-argument': noClassnamesWithOneArgument,
    'hooks-deps-element-newline': hooksDepsElementNewline,
  },
}
