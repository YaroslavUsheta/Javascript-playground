import { open } from "node:fs/promises";

const file = await open("./users.csv");

const fileContent = await file.readFile({ encoding: "utf8" });

const lines = fileContent.split("\n");

//const id = 2;

//const users = [];

// for loop that populates the array
let i = 2;
i < lines.length;
i++;
//console.log(`${i}st   list of users`, lines[i]);
console.log("list of users by", lines[i]);
console.log(fileContent.split("\n"));

const firstLine = fileContent.split("\n")[1];

console.log("First user");

console.log(firstLine.split(","));

const secondLine = fileContent.split("\n")[2];

//console.log(fileContent.split("\n"));

console.log("Second user");

console.log(secondLine.split(","));

//console.log(fileContent.split("\n"));

const thirdLine = fileContent.split("\n")[3];

console.log("Third user");

console.log(thirdLine.split(","));

use;
//console.log(users[id]);

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
