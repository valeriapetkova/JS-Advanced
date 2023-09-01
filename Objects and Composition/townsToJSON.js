function townsToJSON(input) {
    let towns = [];

    let titles = input.shift().split(' | ');
    let town = titles[0].split(' ').slice(1).toString();
    let latitude = titles[1];
    let longitude = titles[2].split(' ').slice(0, 1).toString();

    for (let line of input) {
        let obj = {};
        let currLine = line.split(' | ');
        let townName = currLine[0].split(' ').slice(1).join(' ').toString();
        let latitudeValue = Number(currLine[1]).toFixed(2);
        let longitudeValue = Number(currLine[2].split(' ').slice(0, 1)).toFixed(2);
    
       obj[town] = townName;
       obj[latitude] = Number(latitudeValue);
       obj[longitude] = Number(longitudeValue);
       towns.push(obj);
    }

    console.log(JSON.stringify(towns));
}