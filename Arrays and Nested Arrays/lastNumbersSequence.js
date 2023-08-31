function lastNumbersSequence(n, k) {
    let elements = [1];

    for (let i = 1; i < n; i++) {
        let index = Math.max(elements.length - k, 0);
        let lastElements = elements.slice(index);

        let sum = 0;

        for (let j = 0; j < lastElements.length; j++) {
            sum += lastElements[j];
        }
        elements.push(sum);
    }

    return elements;
}