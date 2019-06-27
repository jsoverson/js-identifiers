const { traverse } = require("shift-traverser");

module.exports = function(ast) {
  const ids = [];
  traverse(ast, {
    enter(node, parent) {
      if (node.type === "VariableDeclarator") {
        if (node.binding.type === "ObjectBinding") {
          node.binding.properties.forEach(prop => ids.push(prop.binding.name));
          if (node.binding.rest) ids.push(node.binding.rest.binding.name);
        } else {
          ids.push(node.binding.name);
        }
      }
    }
  });
  return ids;
};
