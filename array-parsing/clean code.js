let numbers = [];

for (let i = 2; i < process.argv.length; i++) {
  const stringInTheInput = process.argv[i];

  const numberInTheInput = parseFloat(stringInTheInput);

  const maxInTheInput = Math.max(...numbers);

  numbers.push(numberInTheInput);
}
console.log("result", numbers + maxInTheInput("Max # is"));
