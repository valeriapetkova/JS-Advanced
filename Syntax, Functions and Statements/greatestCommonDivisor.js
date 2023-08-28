function greatestCommonDivisor(num1, num2) {
    let greaterNum = Math.max(num1, num2);
    let greatestNumber = 0;

    for (let i = 1; i <= greaterNum; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            greatestNumber = i;
        } else {
            continue;
        }
    }
    console.log(greatestNumber);
}