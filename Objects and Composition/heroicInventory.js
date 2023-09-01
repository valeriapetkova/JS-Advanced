function heroicInventory(input) {
    let register = {};
    let registerArr = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        
        register.name = name;
        register.level = Number(level);

        if (items) {
            items = items.split(', ');
        } else {
            items = [];
        }

        register.items = items;
        registerArr.push(JSON.parse(JSON.stringify(register)));
    }

    let result = JSON.stringify(registerArr);
    console.log(result);
}