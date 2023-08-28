function sumOfNumbers(str1, str2) {
    let n = Number(str1);
    let m = Number(str2);

    let sum = 0;

    for (let i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum);
}