function negativePositiveNumbers(input) {
    let arrNums = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            arrNums.unshift(input[i]);
        } else {
            arrNums.push(input[i]);
        }
    }

    for (let el of arrNums) {
        console.log(el);
    }
}