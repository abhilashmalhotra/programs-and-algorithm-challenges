// Remove First and Last Character

// Description:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

/* --------- Solution 1 -------- */
 
function removeChar(str) {
    return str.slice(1, str.length - 1);
};


/* --------- Solution 2 -------- */
/* function removeChar(str) {
    str = str.split('');
    str.pop();
    str.shift();
    return str.join('');
} */



// Test Cases
console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');