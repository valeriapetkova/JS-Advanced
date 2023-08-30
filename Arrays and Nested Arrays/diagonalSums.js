function diagonalSums(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0, j = input.length - 1; i < input.length; i++, j--) {
            let mainDiagonalEl = input[i][i];
            let secondaryDiagonalEl = input[i][j];
            mainDiagonal += mainDiagonalEl;
            secondaryDiagonal += secondaryDiagonalEl;
    }

    console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}