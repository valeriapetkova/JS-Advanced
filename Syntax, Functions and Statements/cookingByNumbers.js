function cookingByNumbers(numStr, operation1, operation2, operation3, operation4, operation5) {
    let num = Number(numStr);
    let arrOperations = [];
    arrOperations.push(operation1, operation2, operation3, operation4, operation5);

    for (let currOperation of arrOperations) {

        if (currOperation === 'chop') {
            num /= 2;
        } else if (currOperation === 'dice') {
            num = Math.sqrt(num);
        } else if (currOperation === 'spice') {
            num += 1;
        } else if (currOperation === 'bake') {
            num *= 3;
        } else if (currOperation === 'fillet') {
            num -= num * 0.20;
        }  
        console.log(num);
    }
}