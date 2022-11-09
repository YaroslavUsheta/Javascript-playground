let numbers = [];
let letters = /^[A-Za-z]+$/;
function allLetter(maxInTheInput) {
  if (maxInTheInput.match(letters)) {
    return "Letters are not allowed";
  }
}

for (let i = 2; i < process.argv.length; i++) {
  const stringInTheInput = process.argv[i];

  const numberInTheInput = parseFloat(stringInTheInput);

  numbers.push(numberInTheInput);

  const maxInTheInput = Math.max(...numbers);
}

//console.log("result", numberInTheInput);

console.log("Max number in the input is", maxInTheInput);
