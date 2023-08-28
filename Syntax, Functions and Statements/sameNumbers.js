function sameNumbers(num) {
    let numStr = num.toString();
    let firstNum = Number(numStr[0]);
    let sum = firstNum;
    let isSame = true;

    for (let i = 1; i < numStr.length; i++) {
        let currentNum = Number(numStr[i]);
        sum += currentNum;

        if (firstNum !== currentNum) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}