// Convert a String to a Number!
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


/* --------- Solution 1 -------- */
/* function stringToNumber(str) {
    return parseInt(str);
} */

/* --------- Solution 2 -------- */
/* function stringToNumber(str) {
    return Number(str);
} */

/* --------- Solution 3 -------- */
function stringToNumber(str) {
    return +str;
}

// Test Cases

console.log(stringToNumber("1234"), 1234)
console.log(stringToNumber("605"), 605)
console.log(stringToNumber("1405"), 1405)
console.log(stringToNumber("-7"), -7)