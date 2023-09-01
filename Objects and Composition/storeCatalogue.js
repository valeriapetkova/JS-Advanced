function storeCatalogue(input) {
    let products = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');

        products[product] = Number(price);
    }

    let sortedArr = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]));

    let firstChar = '';
    for (let [productName, productPrice] of sortedArr) {
        let char = productName[0];
        if (firstChar !== char) {
            firstChar = char;
            console.log(firstChar);
        }
        console.log(`  ${productName}: ${productPrice}`);
    }
}