import { open } from "node:fs/promises";
import { EOL } from "node:os";

// eventually we should ask a user to give us the filename to process
const filename = "./users.csv";

/**
 * Reads a given filename (if it exists) and returns array of file lines.
 */
async function csvToArray(filename) {
  const file = await open(filename);
  const fileContent = await file.readFile({ encoding: "utf8" });
  const lines = fileContent.split(EOL);
  return lines;
}

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

// function createTable(csvHeader) {

// }

/** For now we are going to handle only numbers and strings. */
/*function typeOfColumn(lines, columnIndex) {
  // start at 1 to skip the header
  for (let i = 1; i < lines.length; i++) {
    const columns = lines[i].split(",");
    const requestedColumn = columns[columnIndex].trim();
    // try to convert into the number
    const maybeFloat = parseFloat(requestedColumn);
    if (isNaN(maybeFloat)) {
      return "varchar(255)";
    }
    const numberAsString = JSON.stringify(Math.round(maybeFloat));
    if (numberAsString === requestedColumn) {
      return "int";
    } else {
      return "double";
    }
  }
}
*/
const input = arrayOfUsers[];
function identifyPerson(lines) 
const listOfUsers = lines[0]
const columns = listOfUsers.split(",");
for (let i = 1; i< length.columns;trim()) {

  
  const lines = await csvToArray(filename);
  //const firstColumnDataType = typeOfColumn(lines, 0);
}
console.log (identifyPerson(lines))
process.exit()



/**function identifyTable(lines) 
  const header = lines[0];
  const columns = header.split(",");

  for (let i = 1; i < length.columns;trim())
  // trim every element in the array

  

  /* //identify column data types
  const firstColumnDataType = typeOfColumn(lines, 0);
  console.log("Data type of the filrst column", firstColumnDataType);
  */
  

//const lines = await csvToArray(filename);

//console.log(identifyTable(lines));
