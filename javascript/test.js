// Anything following double slashes is an English-language comment. 
// Read the comments carefully: they explain the JavaScript code. 
// A variable is a symbolic name for a value. 
// Variables are declared with the let keyword: 
let x;
// Declare a variable named x. 
// Values can be assigned to variables with an = sign 
x = 0;
// Now the variable x has the value 0 
x
// = > 0: A variable evaluates to its value. 
// JavaScript supports several types of values 
x = 1; // Numbers. 
x = 0.01; // Numbers can be integers or reals. 
x = "hello world"; // Strings of text in quotation marks. 
x = 'JavaScript'; // Single quote marks also delimit strings. 
x = true; // A Boolean value.
x = false; // The other Boolean value. 
x = null; // Null is a special value that means "no value." 
x = undefined; // Undefined is another special value like null.

// OBJECTS AND ARRAYS
// JavaScript's most important datatype is the object. 
// An object is a collection of name/ value pairs, or a string to value map. 
let book = { // Objects are enclosed in curly braces. 
    topic: "JavaScript", // The property "topic" has value "JavaScript." 
    edition: 7 // The property "edition" has value 7 
};
// The curly brace marks the end of the object. 
// Access the properties of an object with . or []: 
book.topic
// = > "JavaScript" 
book[" edition"] // = > 7: another way to access property values. 
book.author = "Flanagan"; // Create new properties by assignment. 
book.contents = {}; // {} is an empty object with no properties. 
// Conditionally access properties with ?. (ES2020): 
book.contents?.ch01?.sect1 // = > undefined: book.contents has no ch01 property. 
// JavaScript also supports arrays (numerically indexed lists) of values: 
let primes = [2, 3, 5, 7];
// An array of 4 values, delimited with [ and ]. 
primes[0]
// = > 2: the first element (index 0) of the array. 
primes.length
// = > 4: how many elements in the array. 
primes[primes.length - 1]
// = > 7: the last element of the array. 
primes[4] = 9;
// Add a new element by assignment. 
primes[4] = 11;
// Or alter an existing element by assignment. 
let empty = [];
// [] is an empty array with no elements. 
empty.length
// = > 0 
// Arrays and objects can hold other arrays and objects:
let points = [ // An array with 2 elements. 
    { x: 0, y: 0 }, // Each element is an object. 
    { x: 1, y: 1 }];

let data = { // An object with 2 properties 
    trial1: [[1, 2], [3, 4]], // The value of each property is an array. 
    trial2: [[2, 3], [4, 5]] // The elements of the arrays are arrays. 
};


// Operators act on values (the operands) to produce a new value. 
// Arithmetic operators are some of the simplest: 
3 + 2
// = > 5: addition 
3 - 2
// = > 1: subtraction 
3 * 2
// = > 6: multiplication 
3 / 2
// = > 1.5: division

// Functions are parameterized blocks of JavaScript code that we can invoke. 
function plus1(x) { // Define a function named "plus1" with parameter "x" 
    return x + 1;
    // Return a value one larger than the value passed in 
}

// Functions are enclosed in curly braces 
plus1(y) // = > 4: y is 3, so this invocation returns 3 + 1 
let square = function (x) { // Functions are values and can be assigned to vars 
    return x * x; // Compute the function's value 
}; // Semicolon marks the end of the assignment. 
square(plus11(y)) // = > 16: invoke two functions in one expression

const plus11 = x => x + 1; // The input x maps to the output x + 1 
const square11 = x => x * x; // The input x maps to the output x * x 
plus11(y) // = > 4: function invocation is the same 
square11(plus11(y))  // = > 16

console.log(data);

