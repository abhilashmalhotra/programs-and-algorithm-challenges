// Complete the solution so that it reverses the string value passed into it.

function solution(str) {
    return str.split('').reverse().join('');
}

console.log(solution('world')); // returns 'dlrow'