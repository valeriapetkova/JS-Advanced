function evenPositionElement(input) {
    let finalArr = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            finalArr.push(input[i]);
        }
    }
    console.log(finalArr.join(' '));
}