const hooksDepsElementNewline = require('./rules/hooks-deps-element-newline')
const noClassnamesWithOneArgument = require('./rules/no-classnames-with-one-argument')
const noTranslateWithTemplateLiteral = require('./rules/no-translate-with-template-literal')
const pascalCaseEnumName = require('./rules/pascal-case-enum-name')
const pascalCaseInterfaceName = require('./rules/pascal-case-interface-name')
const pascalCaseTypeName = require('./rules/pascal-case-type-name')

module.exports = {
  rules: {
    'hooks-deps-element-newline': hooksDepsElementNewline,
    'no-classnames-with-one-argument': noClassnamesWithOneArgument,
    'no-translate-with-template-literal': noTranslateWithTemplateLiteral,
    'pascal-case-enum-name': pascalCaseEnumName,
    'pascal-case-interface-name': pascalCaseInterfaceName,
    'pascal-case-type-name': pascalCaseTypeName,
  },
}
