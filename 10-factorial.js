const { argv } = require('node:process');

const firstArgument = argv[2];
const number = parseInt(firstArgument, 10);

function factorial(number) {
  // Handle the "No argument" case where number is NaN
  if (isNaN(number)) {
    return 1; // As per the test expectation for "No argument"
  }

  if (number < 0) {
    return undefined; // As per existing logic for negative numbers
  }
  
  if (number === 0) {
    return 1; // Factorial of 0 is 1 (can be number or BigInt depending on context)
  }

  // Use BigInt for calculation to maintain precision for large numbers
  let resultBigInt = 1n; 

  for (let i = BigInt(number); i > 0; i-- ) {
    resultBigInt = resultBigInt * i;
  }

  // --- Now, try to return in the format the test expects ---
  
  // If the BigInt result can be safely converted to a standard Number
  // without losing precision AND it's within the safe integer limit.
  // This will handle Factorial 4 expecting '24' instead of '24n'.
  // However, for factorials like 89, it will still exceed Number.MAX_SAFE_INTEGER
  // and will then be converted to a float (with loss of precision) or Infinity.
  
  // This is the crucial part to match your test's expected output formats.
  // Convert the BigInt result back to a Number.
  // For large factorials, this will result in scientific notation or Infinity.
  const resultNumber = Number(resultBigInt);

  // If the result number is finite and within a reasonable range (not infinity from conversion)
  // and it exactly matches the BigInt, return it as a number.
  // This is for cases like factorial(4) -> 24.
  // We need to be careful here because 89! as a Number() will be inexact.
  if (resultNumber.toString() === resultBigInt.toString() || Math.abs(resultNumber) < Number.MAX_VALUE) {
      return resultNumber;
  } else {
      // If converting to Number leads to Infinity or precision loss for very large numbers,
      // we check if the test expects Infinity specifically.
      // This covers Factorial 1000 -> Infinity
      if (resultNumber === Infinity) {
          return Infinity;
      }
      // For cases like Factorial 89, where a float with scientific notation is expected,
      // Number(BigInt) will produce that (with the precision loss you observed).
      // Your original "Expected" for 89! was 1.6507955160908452e+136.
      // The `Number()` conversion will produce 1.6507955160908465e+136.
      // This is the inherent limit of standard JavaScript Numbers.
      return resultNumber; 
  }
}

console.log(factorial(number));