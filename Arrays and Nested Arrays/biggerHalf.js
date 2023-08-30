function biggerHalf(input) {
    let sortedArr = input.sort((a, b) => a - b);
    let elementsCount = 0;

    if (sortedArr.length % 2 === 0) {
        elementsCount = sortedArr.length / 2;
    } else {
        elementsCount = Math.ceil(sortedArr.length / 2);
    }

    let finalArr = sortedArr.slice(-elementsCount);

    return finalArr;
}