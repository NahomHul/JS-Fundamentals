const { argv } = require('node:process');

const message = "C is fun";
const firstArgument = argv[2];
const ParsedNumber = parseInt(firstArgument, 10);

if (!isNaN(ParsedNumber)) {

  for (let i = 1; i <= ParsedNumber; i++) {
    console.log(message);

    }
} else {
  console.log("Missing number of occurrences");
}

// if (!isNaN(ParsedNumber)) {
//   console.log(`My number: ${ParsedNumber}`);
// } else {
//   console.log('Not a number');
// }