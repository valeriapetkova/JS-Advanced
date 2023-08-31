function rotateArray(arr, rotationAmount) {
    for (let i = 0; i < rotationAmount; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}