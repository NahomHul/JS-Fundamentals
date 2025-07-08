const { argv } = require('node:process');

const firstArgument = argv[2];
const secondArgument = argv[3];
const a = parseInt(firstArgument, 10);
const b = parseInt(secondArgument, 10);

function add(a, b) {
  return a + b
}

console.log(add(a, b));