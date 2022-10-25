function greeting(input) {
  return console.log("Hello, " + input);
  if (!input) {
    return console.log("enter the name");
  }
}
greeting(process.argv[2]);
