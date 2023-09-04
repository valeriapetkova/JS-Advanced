function autoEngineeringCompany(input) { 
    let brands = {};
    for (let line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!brands.hasOwnProperty(carBrand)) {
            brands[carBrand] = {};
            brands[carBrand][carModel] = producedCars;
        } else {
            if (!brands[carBrand].hasOwnProperty(carModel)) {
                brands[carBrand][carModel] = producedCars;
            } else {
                brands[carBrand][carModel] = producedCars + brands[carBrand][carModel];
            }
        }
    }

    for (let brand in brands) {
        console.log(brand);
        for (let model in brands[brand]) {
            console.log(`###${model} -> ${brands[brand][model]}`);
        }
    }
}