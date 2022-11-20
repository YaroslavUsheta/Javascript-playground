import { open } from "node:fs/promises";
import { listenerCount } from "node:process";

const file = await open("./users.csv");

const fileContent = awai line;
for await (const line of file.readLines()) {
      console.log(line);
     }
    
    console.log(fileContent.split(lineBreak));
    
    const firstLine = fileContent.split(lineBreak)[1];
    
    console.log("Printing the first line");
    
    console.log(firstLine.split(','));
    
    const users = [
      {
        id: 1,
        firstName: "Scott",
        lastName: "Hunter",
        title: "VP of Azure Development"
      },
      {
        id: 1,
        firstName: "Scott",
        lastName: "Hunter",
        title: "VP of Azure Development"
      }
    ]

console.log(file);
