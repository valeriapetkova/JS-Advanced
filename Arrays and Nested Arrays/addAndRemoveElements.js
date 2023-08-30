function addAndRemoveElements(input) {
    let initialNumber = 0;
    let resultArr = [];

    for (let i = 0; i < input.length; i++) {
        initialNumber++;
        let command = input[i];

        if (command === 'add') {
            resultArr.push(initialNumber);
        } else if (command === 'remove') {
            resultArr.pop(initialNumber);
        }
    }

    if (resultArr.length > 0) {
        resultArr.forEach((x => console.log(x)));
    } else {
        console.log('Empty');
    }
}