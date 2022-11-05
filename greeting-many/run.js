const names = ["Joe", "Bill", "John"];
function greeting(index) {
  return "Hello " + index;
}
for (let index in names) {
  console.log(greeting(names[index]));
}
