const id = {
  firstName: "Scott",
  lastName: "Hunter",
  Title: "VP of Azure Development",
}
console.log(id)
process.exit();
  firstName: "Scott",
  lastName: " Guthrie",
  Title: "EVP of Azure & AI",

  firstName: "Scott",
  lastName: "Hanselman",
  Title: "Director of Azure",
};
console.log(id);

import { open } from "node:fs/promises";

const file = await open("./users.csv");

for await (const line of file.readLines()) {
  console.log(line);
}
