const { argv } = require('node:process');

const firstArgument = argv[2];
const number = BigInt(firstArgument);

function factorial(n) {
  if (n < 0n) return undefined;
  if (n === 0n) return 1n;

  let result = 1n;
  for (let i = n; i > 0n; i--) {
    result *= i;
  }
  return result;
}

const bigResult = factorial(number);

// Convert to Number (will round), format to 16 decimal places
const formattedResult = Number(bigResult).toExponential(16);
console.log(formattedResult);
