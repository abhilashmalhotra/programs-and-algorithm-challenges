// Complete the solution so that it reverses the string value passed into it.

/* --------- Solution 1 -------- */
/* function solution(str) {
    return str.split('').reverse().join('');
} */


/* --------- Solution 2 -------- */
/* function solution(str) {
    let revStr = ''
    let strArr = str.split('');
    for (let i = strArr.length - 1; i >= 0; i--) {
        revStr += strArr[i];
    }
    return revStr;
} */


/* --------- Solution 3 -------- */
function solution(str) {
    return str.split('').reduce((inital, next) => next + inital, '');
}

console.log(solution('world')); // returns 'dlrow'