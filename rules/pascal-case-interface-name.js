module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'First charactor of interface name must be upper case',
      category: 'Convention',
    },
    fixable: 'code',
  },
  create(context) {
    return {
      TSInterfaceDeclaration({ id }) {
        if (/^[a-z]/.test(id.name)) {
          context.report({
            node: id,
            message: 'Interface\'s first charactor must be upper case.',
            fix: fixer => {
              return fixer.replaceText(id, `${id.name.charAt(0).toUpperCase()}${id.name.slice(1)}`)
            },
          })
        }
        if (/^I[A-Z]/.test(id.name)) {
          context.report({
            node: id,
            message: 'There should be no \'I\' prefix.',
            fix: fixer => {
              return fixer.replaceText(id, id.name.slice(1))
            },
          })
        }
      },
    }
  },
}
