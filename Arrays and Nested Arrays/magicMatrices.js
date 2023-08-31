function magicMatrices(input) {
    let arrRows = [];
    let arrCols = [];

    for (let i = 0; i < input.length; i++) {
        let sumRows = 0;
        let currArr = input[i];
        sumRows = currArr.reduce((a,b) => a + b);
        arrRows.push(sumRows);
    }

    for (let k = 0; k < input[0].length; k++) {
        let sumCols = 0;
        for (let l = 0; l < input.length; l++) {
            let currEl = input[l][k];
            sumCols += currEl;
        }
        arrCols.push(sumCols);
    }

    let isEqual = true;

    for (let elRow of arrRows) {
        for (let elCol of arrCols) {
            if (elRow !== elCol) {
                isEqual = false;
            }
        }
    }

    return isEqual;
}