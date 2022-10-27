/**
 * Prepares the greeting based on the user input.
 * input --> message (string)
 * Note that console.log() is also a function. It return undefined.
 */
function greeting(input) {
  if (!input) {
    return "enter the name";
  }
  return "Hello, " + input;
}

// Prepare the message
const message = greeting(process.argv[2]);

// Print message to the screen
console.log(message);
