const { argv } = require('node:process');

const firstArgument = argv[2];
const number = parseInt(firstArgument, 10);

function factorial(number) {
  if (number < 0) return undefined;
  if (number === 0) return 1;
  let result = 1;

  for (let i = number; i > 0; i-- ) {
    result = result * i;
  }
  return result
}

console.log(factorial(number));