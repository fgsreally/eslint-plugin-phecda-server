module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Enforce that moduleFile have exactly one decorated class export",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
    schema: [
     
    ],
  },
  create(context) {


    return {
      Program(node) {
        const exports = node.body.filter((item) =>
          ["ExportNamedDeclaration", "ExportDefaultDeclaration"].includes(
            item.type
          )
        );
        if (
          exports.length !== 1 ||
          exports[0].declaration.type !== "ClassDeclaration"
        ) {
          context.report({
            node: exports[0],
            message: `moduleFile must have exactly one class export or it may cause hmr problem`,
          });
          if (!!exports[0].declaration.decorators) {
            context.report({
              node: exports[0],
              message: `class exported from moduleFile must be decorated or it may cause hmr problem`,
            });
          }
        }
      },
    };
  },
};
