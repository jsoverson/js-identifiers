const assert = require("assert");
const { parseScript } = require("shift-parser");

const identifiers = require("../");

const ast = parseScript("const a = 1; var b = 2; let c = 3; var {d, e} = b;");

assert.equal(identifiers(ast).length, 5);
