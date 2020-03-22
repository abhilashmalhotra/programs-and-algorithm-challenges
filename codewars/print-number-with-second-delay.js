// Print number with delay of 1 second

function printNum(startNum, num) {
    let start = startNum;
    let interval = setInterval(() => {
        console.log(start)
        start++;
        if(start > num){
            clearInterval(interval)
        }
    }, 1000)
}

printNum(0, 10);