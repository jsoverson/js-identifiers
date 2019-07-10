const assert = require("assert");
const { parseScript } = require("shift-parser");

const identifiers = require("../");

const ast = parseScript("const a = 1; var b = 2; let c = 3; var {d, e, ...x} = b; const [f,g,...z] = foo");

const ids = identifiers(ast);

assert.equal(ids.length, 9);
assert.deepEqual(
  ['a','b','c','d','e','x','f','g','z'],
  ids
)