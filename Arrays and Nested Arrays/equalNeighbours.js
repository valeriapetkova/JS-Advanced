function equalNeighbours(input) {
    let count = 0;

    for(let i = 0; i < input.length; i++) {
        let arr = input[i];

        for(let j = 0; j < arr.length; j++) {
            if(i - 1 >= 0 && input[i][j] === input[i - 1][j]) {
                count++;
            }

            if(j - 1 >= 0 && input[i][j] === input[i][j - 1]) {
                count++;
            }
        }
    }

    return count;
}