function extractIncreasingSubset(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;

    let finalResult = input.reduce((acc, curr) => {
        if (curr >= biggestNum) {
            biggestNum = curr;
            let arr = acc;
            arr.push(curr);
            return arr;
        }
        return acc;
    }, []);

    return finalResult;
}