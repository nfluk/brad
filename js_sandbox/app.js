const num1 = 100;
const num2 = 50;

let firstName = 'Johnny';
let lastName = 'LaRusso';

let val;

// simple math with numbers
val = Math.round(3.4); // regular rounding
val = Math.floor(3.6); // rounds down to closest integer
val = Math.ceil(3.2); // founds up to closest integer
val = Math.sqrt(25); // gets the square of the number
val = Math.pow(5, 2); // takes the first num to the power of the second
val = Math.abs(-5); // gets the absolute number (disregards from negative numbers)

// escaping
val = "That's awesome!"; // the backslash escapes the single quote before the s

// concat
val = firstName.concat(' ', lastName);

console.log(val);
