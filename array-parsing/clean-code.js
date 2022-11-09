let numbers = [];

for (let i = 2; i < process.argv.length; i++) {
  const stringInTheInput = process.argv[i];

  const numberInTheInput = parseFloat(stringInTheInput);
  if (Number.isNaN(numberInTheInput)) {
    const message = `Cannot procces input: '${stringInTheInput}' is not a number`;

    console.log(message);

    process.exit();
  }

  numbers.push(numberInTheInput);
}
const maxInTheInput = Math.max(...numbers);
//console.log("result", numberInTheInput);

console.log("Max number in the input is", maxInTheInput);
