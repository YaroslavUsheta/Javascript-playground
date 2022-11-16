import { open } from "node:fs/promises";

const file = await open("./users.csv");

const fileContent = await file.readFile({ encoding: "utf8" });

console.log(fileContent);
