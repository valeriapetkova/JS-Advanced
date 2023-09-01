function carFactory(obj) {
    let car = {};
    let engine = {};
    let carriage = {};
    let wheels = [];

    car.model = obj.model;

    if (obj.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (obj.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (obj.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    car.engine = engine;

    carriage.type = obj.carriage;
    carriage.color = obj.color;

    car.carriage = carriage;

    if (obj.wheelsize % 2 === 0) {
        obj.wheelsize = obj.wheelsize - 1;
    }

    for (let i = 0; i < 4; i++) {
        wheels.push(obj.wheelsize);
    }
    
    car.wheels = wheels;
    
    return car;
}