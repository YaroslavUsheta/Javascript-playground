/**
 * Return true if input contains digits.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * && AND
 * || OR
 */
function containsDigits(str) {
    return str.includes("0") || str.includes("1");
}

/**
 * Prepares the greeting based on the user input.
 * input --> message (string)
 * Note that console.log() is also a function. It return undefined.
 * () parenthesis
 * [] square brackets
 * {} curly braces
 */
function greeting(input) {
  if (!input) {
    return "enter the name";
  }
  if (containsDigits(input)) {
    return "Digits are not allowed."
  }
  return "Hello, " + input;
}

// Prepare the message
const message = greeting(process.argv[2]);

// Print message to the screen
console.log(message);
