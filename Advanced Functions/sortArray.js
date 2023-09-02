function sortArray(numbers, command) {

    if (command === 'asc') {
        numbers.sort((a, b) => a - b);
    } else if (command === 'desc') {
        numbers.sort((a, b) => b - a);
    }
    return numbers;
}