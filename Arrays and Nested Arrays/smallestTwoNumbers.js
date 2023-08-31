function smallestTwoNumbers(input) {
    let sortedArr = input.sort((a, b) => a - b);
    let finalArr = sortedArr.slice(0, 2);

    console.log(finalArr.join(' '));
}