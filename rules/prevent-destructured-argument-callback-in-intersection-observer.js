module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'IntersectionObserver\'s callback should not destructure argument. Callback\'s `entries` argument can have multi value even observe only one element.',
      category: 'Possible Problems',
    },
  },
  create(context) {
    return {
      NewExpression: (node) => {
        if (node.callee.name !== 'IntersectionObserver') { return }
        const func = node.arguments[0]
        if (func.type !== 'FunctionExpression' && func.type !== 'ArrowFunctionExpression') { return }
        if (func.params[0].type === 'ArrayPattern') {
          context.report({
            node: func,
            message: 'IntersectionObserver\'s callback should not destructure argument. Callback\'s `entries` argument can have multi value even observe only one element.',
          })
        }
      },
    }
  },
}
