const { argv } = require('node:process');

const firstArgument = argv[2];
const ParsedNumber = parseInt(firstArgument, 10);

if (!isNaN(ParsedNumber)) {
  console.log(`My number: ${ParsedNumber}`);
} else {
  console.log('Not a number');
}