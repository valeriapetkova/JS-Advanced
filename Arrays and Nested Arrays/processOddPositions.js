function processOddPositions(input) {
    let resultArr = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            resultArr.push(input[i]);
        }
    }

    let finalResult = resultArr.map((x => x * 2)).reverse().join(' ');
    console.log(finalResult);
}