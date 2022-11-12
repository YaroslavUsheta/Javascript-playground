import { open } from "node:fs/promises";

const file = await open("./users.csv");

for await (const line of file.readLines()) {
  console.log(line);
}
