function solution(num) {
    let firstNum = num;

    return function (newNum) {
        return firstNum + newNum;
    }
}