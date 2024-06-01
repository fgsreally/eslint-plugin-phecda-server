module.exports={
  meta: {
    docs: {
      description: "Require calling @Ctx decorated property as the first statement in a method",
      category: "Best Practices",
      recommended: true
    },
    schema: []
  },
  create: function(context) {
    return {
      MethodDefinition(node) {
        if (node.value.type === "FunctionExpression" || node.value.type === "ArrowFunctionExpression") {
          let ctxCalled = false;
          for (let statement of node.value.body.body) {
            if (statement.type === "ExpressionStatement" && statement.expression.type === "CallExpression" && statement.expression.callee.name === "Ctx") {
              ctxCalled = true;
            }
            if (ctxCalled && statement.type !== "ExpressionStatement") {
              context.report({
                node: statement,
                message: "@Ctx property must be called as the first statement in the method"
              });
            }
          }
        }
      }
    };
  }
}