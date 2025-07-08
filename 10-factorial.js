const { argv } = require('node:process');

const firstArgument = argv[2];
const number = parseInt(firstArgument, 10);

function factorial(number) {
  if (number < 0) return undefined;
  if (number === 0) return 1;
  let result = 1;

  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

const result = factorial(number);

// If result is large, use scientific notation; otherwise, print normally
if (result >= 1e21) {
  console.log(result.toExponential(16));
} else {
  console.log(result.toString());
}
