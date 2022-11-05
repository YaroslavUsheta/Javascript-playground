// parse numbers and find max

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

  const numberInTheInput = parseFloat(stringInTheInput);

  // adding process.argv[i] to the end of the array
  numbers.push(numberInTheInput);
  // console.log("After push", numbers);
}

// because Math.max does not take array, but need to get all numbers as function arguments,
// we convert array in that using ... (array destructuring).
const maxInTheInput = Math.max(...numbers);

//console.log("Numbers", numbers);

//const num = process.argv[3];

console.log("Max number in the input is", maxInTheInput);
