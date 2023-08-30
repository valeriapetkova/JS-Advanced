function diagonalAttack(input) {
    let matrix = [];

    while (input.length > 0) {
        matrix.push(input.shift().split(' ').map(Number));
    }

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {

        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }

    if (mainDiagonal === secondaryDiagonal) {
        
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (j !== matrix.length - 1 - i && j !== i) {
                    matrix[i][j] = mainDiagonal;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}