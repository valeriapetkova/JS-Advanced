function printElement(arrStr, step) {
    let newArr = [];

    for (let i = 0; i < arrStr.length; i += step) {
        newArr.push(arrStr[i]);
    }

    return newArr;
}