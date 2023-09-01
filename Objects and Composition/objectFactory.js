function objectFactory(library, orders) {
    let resultArr = [];

    for (let order of orders) {
        let currentOrder = Object.assign({}, order.template);
        for (let part of order.parts) {
            currentOrder[part] = library[part];
        }
        resultArr.push(currentOrder);
    }

    return resultArr;
}
      