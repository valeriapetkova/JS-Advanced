function townPopulation(input) {
    let registry = {};

    for (let line of input) {
        let [town, population] = line.split(' <-> ');

        if (!registry.hasOwnProperty(town)) {
            registry[town] = 0;
        }

        registry[town] += Number(population);
    }

    for (let key in registry) {
        console.log(`${key} : ${registry[key]}`);
    }
}