function lowestPricesInCities(input) {
    let result = {};

    for(let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!result.hasOwnProperty(product)) {
            result[product] = [town, price];
        } else {
            if (result[product][1] > price) {
                result[product] = [town, price];
            }
        }
    }
    for (let obj in result) {
        console.log(`${obj} -> ${result[obj][1]} (${result[obj][0]})`);
    }
}