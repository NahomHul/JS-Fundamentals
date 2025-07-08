const { argv } = require('node:process');

const firstArgument = argv[2];
const number = BigInt(firstArgument);

function factorial(number) {
  if (number < 0n) return undefined;
  if (number === 0n) return 1n;

  let result = 1n;

  for (let i = number; i > 0n; i--) {
    result = result * i;
  }

  return result;
}

console.log(factorial(number).toString());
