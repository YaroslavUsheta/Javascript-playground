const names = ["Joe", "Bill", "John"];
function greeting(name) {
  return "Hello " + name;
}
for (let name in names) {
  console.log(greeting(names[name]));
}
