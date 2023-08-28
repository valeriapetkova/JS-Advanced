function squareOfStars(input) {
    if (typeof input === 'number' && input > 0) {
        let num = input;
        let result = '';
        for (let i = 0; i < num; i++) {
            result = '';
            for (let j = 0; j < num; j++) {
                result += '* '
            }
            console.log(result);
        }
    } else {
        let result = '';
        for (let i = 0; i < 5; i++) {
            result = '';
            for (let j = 0; j < 5; j++) {
                result += '* '
            }
            console.log(result);
        }
    }
}