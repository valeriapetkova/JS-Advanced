function argumentInfo() {
    let words = Array.from(arguments);
    let obj = {};
    
    for (let word of words) {
        let typeOfWord = typeof word;
        console.log(`${typeOfWord}: ${word}`);

        if (!obj.hasOwnProperty(typeOfWord)) {
            obj[typeOfWord] = 0;
        }
        obj[typeOfWord]++;
    }

    Object.entries(obj) 
    .sort((a, b) => b[1] - a[1]) 
    .forEach(x => console.log(`${x[0]} = ${x[1]}`)); 
}