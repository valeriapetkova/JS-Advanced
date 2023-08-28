function aggregateElements(input) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = '';
    let arr2 = input.slice(0).map(x => 1/x);
    let arr3 = input.slice(0).toString().split(',');

    for (let el of input) {
        sum1 += el;
    }
    console.log(sum1);

    for (let el of arr2) {
        sum2 += el;
    }
    console.log(sum2);

    for (let el of arr3) {
        sum3 += el;
    }
    console.log(sum3);
}