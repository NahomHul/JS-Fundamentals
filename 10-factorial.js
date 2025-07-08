const { argv } = require('node:process');

const firstArgument = argv[2];
const number = BigInt(firstArgument);

function factorial(number) {
  if (number < 0n) return undefined;
  if (number === 0n) return 1n;

  let result = 1n;
  for (let i = number; i > 0n; i--) {
    result *= i;
  }
  return result;
}

const result = factorial(number);

// Let JS decide: fixed or scientific notation
console.log(Number(result).toString());
