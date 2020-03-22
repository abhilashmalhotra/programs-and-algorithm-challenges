// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

/* --------- Solution 1 -------- */
/* String.prototype.toAlternatingCase = function () {
    let string = this.split('');
    let newString = [];
    for (let i = 0; i < string.length; i++) {
        let currVal = string[i];
        (currVal == currVal.toUpperCase()) ? newString.push(currVal.toLowerCase()) : newString.push(currVal.toUpperCase());
    }
    return newString.join('');
}
*/
/* --------- Solution 2 -------- */
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// Test cases
console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");