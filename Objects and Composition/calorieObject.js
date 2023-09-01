function calorieObject(input) {
    let foodName = '';
    let calories = 0;
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            foodName = input[i];
        } else if (i % 2 !== 0) {
            calories = Number(input[i]);
        }
        obj[foodName] = calories;
    }

    console.log(obj);
}