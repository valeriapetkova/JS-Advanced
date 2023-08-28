function circleArea(input) {
    let typeOfInput = typeof input;

    if (typeOfInput === 'number') {
        let r = input;
        let result = Math.PI * Math.pow(r, 2);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}