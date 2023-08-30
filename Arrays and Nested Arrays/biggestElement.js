function biggestElement(matrix) {
    let result = [];

    matrix.forEach(row => row.forEach(el => result.push(el)));

    let biggestNum = Math.max(...result);
    console.log(biggestNum);
}