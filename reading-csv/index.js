import { open } from "node:fs/promises";

const file = await open("./users.csv");
str.split(separator, limit);

const fileContent = await file.readFile({ encoding: "utf8" });

console.log(fileContent);
//console.log()
