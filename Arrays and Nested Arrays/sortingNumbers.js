function sortingNumbers(input) {
    let sortedArr = input.sort((a, b) => a - b);
    let resultArr = [];
    let sortedArrLength = Math.ceil(sortedArr.length / 2);

    for (let i = 0; i < sortedArrLength; i++) {
        let firstElement = sortedArr.shift();
        let secondElement = sortedArr.pop();
        resultArr.push(firstElement, secondElement);
    }
    
    return resultArr;
}