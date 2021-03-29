module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'First charactor of type name must be upper case',
      category: 'Convention',
    },
    fixable: 'code',
  },
  create(context) {
    return {
      TSTypeAliasDeclaration({ id }) {
        if (/^[a-z]/.test(id.name)) {
          context.report({
            node: id,
            message: 'Type\'s first charactor must be upper case.',
            fix: fixer => {
              return fixer.replaceText(id, `${id.name.charAt(0).toUpperCase()}${id.name.slice(1)}`)
            },
          })
        }
      },
    }
  },
}
