// parse numbers and find max
console.log(process.argv);
console.log(typeof process.argv);
console.log(Array.isArray(process.argv));
//console.log(process.argv.length);
let c = 2;
console.log(process.argv[c]);

const fruits = ["apple", "banana", "pear"];

const b = 45 - 44;

const someFruit = fruits[b];

console.log("The value of someFruit is", someFruit);

// creates an empty array.
let numbers = [];

//for (let index in process.argv) {
//    console.log(process.argv[index]);
//}

// console.log(process.argv.length);

// for ( executes before loop starts ;  terminating condition (if false loop stops) ; executes after every loop iteration )
for (let i = 2; i < process.argv.length; i++) {
  //console.log(process.argv[i]);

  const stringInTheInput = process.argv[i];
  console.log(stringInTheInput);
  process.exit();
  const numberInTheInput = parseFloat(stringInTheInput);

  // adding process.argv[i] to the end of the array
  numbers.push(numberInTheInput);

  // function containsLatters(num) {
  // if ([] === NaN) return (input + "numbers are not allowed")[i];
  //}
}
console.log("After push", numbers);

// because Math.max does not take array, but need to get all numbers as function arguments,
// we convert array in that using ... (array destructuring).
const maxInTheInput = Math.max(...numbers);

//console.log("Numbers", numbers);

//const num = process.argv[3];

console.log("Max number in the input is", maxInTheInput);
