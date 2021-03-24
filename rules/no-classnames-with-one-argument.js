module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Detect useless call classnames',
      category: 'Best Practices',
    },
    fixable: 'code',
  },
  create(context) {
    let classNameImportName
    return {
      ImportDeclaration({ source, specifiers }) {
        if (source.value === 'classnames') {
          classNameImportName = specifiers[0].local.name
        }
      },
      CallExpression(node) {
        if (!classNameImportName) {
          return
        }

        const { callee, arguments } = node
        if (callee.name === classNameImportName && arguments.length === 1 && arguments[0].type !== 'ObjectExpression') {
          context.report({
            node,
            message: 'Do not call classnames with only one argument.',
            fix: fixer => {
              const callExpressionText = context.getSourceCode().getText(node)
              const methodRegExp = new RegExp(`^${classNameImportName}\\((.+)\\)`)
              return fixer.replaceText(node, callExpressionText.replace(methodRegExp, '$1'))
            },
          })
        }
      },
    }
  },
}
