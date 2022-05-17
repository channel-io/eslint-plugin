module.exports = {
  meta: {
    type: 'problem',
    schema: [
      {
        type: 'object',
        properties: {
          translateFuncNames: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      }
    ],
    docs: {
      description: 'Do not call translation method with template literal',
      category: 'Possible Problems',
    },
  },
  create(context) {
    const sourceCode = context.getSourceCode()
    const translateFuncNames = context.options[0]?.translateFuncNames || ['translate']
    return {
      CallExpression(node) {
        const { callee } = node
        if (
          translateFuncNames.includes(callee.name) &&
          sourceCode.getTokens(node).some(token => token.type === 'Template')
        ) {
          context.report({
            node,
            message: 'Do not call translation method with template literal.',
          })
        }
      }
    }
  },
}
