function getFibonator() {
    let [a, b] = [0, 1];

    return () => {
        let sum = a + b;
        a = b;
        b = sum;
        return a;
    }
}