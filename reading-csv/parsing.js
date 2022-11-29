/**
 * Reads a given filename (if it exists) and returns array of file lines.
 */
async function csvToArray(filename) {
  const file = await open(filename);
  const fileContent = await file.readFile({ encoding: "utf8" });
  const lines = fileContent.split("\n");
  return lines;
}

module.exports = { functionThatIExported: csvToArray };
