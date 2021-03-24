const reactHookNames = [
  'useEffect',
  'useLayoutEffect',
  'useCallback',
  'useMemo',
  'useImperativeHandle',
]

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce line breaks between deps array elements',
      category: 'Convention',
    },
    fixable: 'code',
  },
  create(context) {
    return {
      CallExpression(node) {
        const { callee, arguments } = node
        if (!reactHookNames.includes(callee.name) || arguments.length <= 1) {
          return
        }
        const deps = arguments[arguments.length - 1]
        if (deps.type === 'ArrayExpression') {
          if (deps.elements.length <= 1 && deps.loc.start.line !== deps.loc.end.line) {
            context.report({
              node: deps,
              message: 'There should be no linebreak here.',
              fix: fixer => {
                const dep = deps.elements.length === 0 ? '' : context.getSourceCode().getText(deps.elements[0])
                return fixer.replaceText(deps, `[${dep}]`)
              },
            })
          } else if (deps.elements.length >= 2) {
            // Deps open bracket between first element
            if (deps.loc.start.line === deps.elements[0].loc.start.line) {
              context.report({
                node: deps,
                message: 'There should be a linebreak after this element.',
                fix: fixer => fixer.insertTextBefore(deps.elements[0], '\n'),
              })
            }

            // Each element
            deps.elements.forEach((ele, i) => {
              if (i === 0) {
                return
              }

              const prev = deps.elements[i - 1]

              if (prev.loc.end.line === ele.loc.start.line) {
                context.report({
                  node: prev,
                  message: 'There should be a linebreak after this element.',
                  fix: fixer => fixer.insertTextBefore(ele, '\n'),
                })
              }
            })

            // Deps end bracket between last element
            const last = deps.elements[deps.elements.length - 1]
            if (deps.loc.end.line === last.loc.start.line) {
              context.report({
                node: last,
                message: 'There should be a linebreak after this element.',
                fix: fixer => fixer.insertTextAfter(last, ',\n'),
              })
            }
          }
        }
      }
    }
  }
}
