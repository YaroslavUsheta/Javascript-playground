let numbers = [];

for (let i = 2; i < process.argv.length; i++) {
  const stringInTheInput = process.argv[i];

  const numberInTheInput = parseFloat(stringInTheInput);
  if (Number.isNaN(numberInTheInput)) {
    console.log("Not a number");
    process.exit();
  }

  numbers.push(numberInTheInput);
}
const maxInTheInput = Math.max(...numbers);
//console.log("result", numberInTheInput);

console.log("Max number in the input is", maxInTheInput);
