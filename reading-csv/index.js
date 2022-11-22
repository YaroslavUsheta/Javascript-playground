import { open } from "node:fs/promises";

const file = await open("./users.csv");

const fileContent = await file.readFile({ encoding: "utf8" });

const lines = fileContent.split("\n");

const id = 2;

const users = [];

// for loop that populates the array
//for (let i = 1; i < lines.length; i++) {
//console.log(`Running ${i} iteration of the for loop`, lines[i]);
//}

//console.log(users[id]);
console.log(fileContent.split("\n"));

const firstLine = fileContent.split("\n")[0];

console.log("First user");

console.log(firstLine.split(","));

const secondLine = fileContent.split("\n")[1];

//console.log(fileContent.split("\n"));

console.log("Second user");

console.log(secondLine.split(","));

//console.log(fileContent.split("\n"));

const thirdLine = fileContent.split("\n")[2];

console.log("Third user");

console.log(thirdLine.split(","));

use;

process.exit();
/*
console.log(fileContent);
*/

// node run start
// Enter the id of a user: 2
/*
 { 
  id: 2,
  firstName: Scott,
  ....
 }
*/
