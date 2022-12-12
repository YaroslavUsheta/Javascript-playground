import { open } from "node:fs/promises";

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

const lines = await csvToArray("./users.csv");
