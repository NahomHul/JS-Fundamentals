const { argv } = require('node:process');

const firstArgument = argv[2];
const number = parseInt(firstArgument, 10);

function factorial(number) {
  if (number < 0) return undefined;
  if (number === 0) return 1n; // Use 1n for BigInt 1
  
  // Initialize result as a BigInt by appending 'n'
  let result = 1n; 

  for (let i = BigInt(number); i > 0; i-- ) { // Convert i to BigInt for calculations
    result = result * i; // All operands must be BigInts for BigInt operations
  }
  return result;
}

console.log(factorial(number));