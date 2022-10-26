function greeting(input) {
  if (!input) {
    return console.log("enter the name");
  }
  return console.log("Hello, " + input);
}

greeting(process.argv[2]);
