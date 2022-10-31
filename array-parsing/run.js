// parse numbers and find max

// creates an empty array.
let numbers = [];

//for (let index in process.argv) {
//    console.log(process.argv[index]);
//}

// console.log(process.argv.length);

// for ( executes before loop starts ;  terminating condition (if false loop stops) ; executes after every loop iteration )
for (let i = 2; i < process.argv.length; i++) {
    // console.log(process.argv[i]);

    // adding process.argv[i] to the end of the array
    numbers.push(process.argv[i]);
    console.log("After push", numbers);
}

// console.log("Numbers", numbers);

// const num = process.argv[3];

// console.log(num);