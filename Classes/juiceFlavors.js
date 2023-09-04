function juiceFlavors(input) {
    let juices = new Map();
    let juicesAndBottles = new Map();

    for (let line of input) {
        let [juiceName, juiceQuantity] = line.split(' => ');
        juiceQuantity = Number(juiceQuantity);

        if (juiceQuantity >= 1000) {
            let bottles = Math.trunc(juiceQuantity / 1000);
            if (juicesAndBottles.has(juiceName)) {
                let oldBottles = juicesAndBottles.get(juiceName);
                let allBottles = bottles + oldBottles;
                juicesAndBottles.set(juiceName, allBottles);
            } else {
                juicesAndBottles.set(juiceName, bottles);
            }
            let leftQuantity = juiceQuantity - (bottles  * 1000);
            if (juices.has(juiceName)) {
                let totalQuantity = leftQuantity + juices.get(juiceName);
                juices.set(juiceName, totalQuantity);
            } else {
                juices.set(juiceName, leftQuantity);
            }
        } else {
            if (!juices.has(juiceName)) {
                juices.set(juiceName, juiceQuantity);
            } else {
                let oldQuantity = juices.get(juiceName);
                let sumQuantities = oldQuantity + juiceQuantity;

                if (sumQuantities >= 1000) {
                    let bottles = Math.trunc(sumQuantities / 1000);
                    let leftQuantities = sumQuantities - (bottles * 1000); 
                    juices.set(juiceName, leftQuantities);
                    if (juicesAndBottles.has(juiceName)) {
                        let oldBottles = juicesAndBottles.get(juiceName);
                        let allBottles = bottles + oldBottles;
                        juicesAndBottles.set(juiceName, allBottles);
                    } else {
                        juicesAndBottles.set(juiceName, bottles);
                    }
                } else {
                    juices.set(juiceName, sumQuantities);
                }
            }
        }
    }

    for (let juice of juices) {
        if (juice[1] >= 1000) {
            let bottles = Math.trunc(juice[1] / 1000);
            let oldBottles = juicesAndBottles.get(juice[0]);
            juicesAndBottles.set(juice[0], bottles + oldBottles);
        }
    }

    for (let juiceAndBottle of juicesAndBottles) {
        console.log(`${juiceAndBottle[0]} => ${juiceAndBottle[1]}`);
    }
}