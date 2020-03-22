// Remove String Spaces

// Description:
// Simple, remove the spaces from the string, then return the resultant string.


/* --------- Solution 1 -------- */
/*
function noSpace(str) {
    return str.replace(/\s/g, '');
} */


/* --------- Solution 2 -------- */
function noSpace(str) {
    return str.split(' ').join('');
}


// Test Cases
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
console.log(noSpace('8aaaaa dddd r     '), '8aaaaaddddr');
console.log(noSpace('jfBm  gk lf8hg  88lbe8 '), 'jfBmgklf8hg88lbe8');
console.log(noSpace('8j aam'), '8jaam'); 