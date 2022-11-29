import { open } from "node:fs/promises";
// const importedObject = require("./parsing.js");

/**
 * Reads a given filename (if it exists) and returns array of file lines.
 */
async function csvToArray(filename) {
  const file = await open(filename);
  const fileContent = await file.readFile({ encoding: "utf8" });
  // line separator on Windows is "\r\n", but it is "\n" on Linux and macOS.
  const lines = fileContent.split("\r\n");
  return lines;
}

/*const title = "Running wild";
const author = "John Smith";

const book = {
  title,
  author,
};
console.log(book);
*/
//add a title(task)
function lineToUser(line) {
  const columns = line.split(",");
  const firstName = columns[1];
  const lastName = columns[2];
  const title = columns[3];
  return {
    firstName,
    lastName,
    title,
  };
}

// Things to remember
// Promises and async/await.
// Node modules and module.exports (splitting your program into multiple files)

const lines = await csvToArray("./users.csv");

console.log("Lines", lines);
console.log("2nd line", lines[1]);
console.log("3d user", lineToUser(lines[3]));
const users = [];

process.exit();

//const id = 2;

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
