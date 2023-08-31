function sumFirstLast(input) {
    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());

    let result = firstNum + lastNum;

    console.log(result);
}