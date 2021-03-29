module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enum name and member\'s name must be pascal case',
      category: 'Convention',
    },
    fixable: 'code',
  },
  create(context) {
    return {
      TSEnumDeclaration({ id, members }) {
        if (/^[a-z]/.test(id.name)) {
          context.report({
            node: id,
            message: 'Enum\'s first charactor must be upper case.',
            fix: fixer => {
              return fixer.replaceText(id, `${id.name.charAt(0).toUpperCase()}${id.name.slice(1)}`)
            },
          })
        }
        members.forEach(member => {
          if (/^[a-z]/.test(member.id.name)) {
            context.report({
              node: member.id,
              message: 'Enum member\'s first charactor must be upper case.',
              fix: fixer => {
                return fixer.replaceText(member.id, `${member.id.name.charAt(0).toUpperCase()}${member.id.name.slice(1)}`)
              },
            })
          } else if (/^[A-Z0-9_]+$/.test(member.id.name)) {
            context.report({
              node: member.id,
              message: 'Enum member name must be pascal case.',
              fix: fixer => {
                return fixer.replaceText(member.id, `${member.id.name.charAt(0)}${member.id.name.slice(1).toLowerCase().replace(/_(.)/g, (match, char) => char.toUpperCase())}`)
              },
            })
          }
        })
      },
    }
  },
}
