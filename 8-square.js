const { argv } = require('node:process');

const message = "X";
const firstArgument = argv[2];
const squareSize = parseInt(firstArgument, 10);


if (!isNaN(squareSize)) {

  for (let i = 1; i <= squareSize; i++) {
    console.log(message.repeat(squareSize));

    }
} else {
  console.log("Missing size");
}
