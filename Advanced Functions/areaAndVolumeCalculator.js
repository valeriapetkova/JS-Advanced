function areaAndVolumeCalculator(area, vol, input) {
    let objects = JSON.parse(input);

    let result = [];

    for (let object of objects) {
        let areaValue = area.call(object);
        let volValue = vol.call(object);
        result.push({ area: areaValue, volume: volValue});
    }

    return result;
}