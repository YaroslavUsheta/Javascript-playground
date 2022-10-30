/**
 * Return true if input contains digits.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * && AND
 * || OR
 */
function containsDigits(str) {
    // We are not going to use here RegEx (regular expressions)
    // return /0-9/.containsDigits(str);
    return str.includes("0") ||
        str.includes("1") ||
        str.includes("2") ||
        str.includes("3") ||
        str.includes("4") ||
        str.includes("5") ||
        str.includes("6") ||
        str.includes("7") ||
        str.includes("8") ||
        str.includes("9");
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
        return "Digits are not allowed.";
    }
    return "Hello, " + input + ".";
}

// Prepare the message
const message = greeting(process.argv[2]);

// Print message to the screen
console.log(message);
