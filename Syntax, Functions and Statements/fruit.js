function fruit(typeOfFruit, weightInGrams, price) {
    let weightInKg = Number(weightInGrams) / 1000;

    let totalMoney = weightInKg * Number(price);

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}