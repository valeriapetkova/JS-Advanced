function listProcessor(input) {
    let result = [];

    for (let element of input) {
        let [command, word] = element.split(' ');

        if(command === 'add') {
            result.push(word);
        } else if (command === 'remove') {
            while (result.includes(word)) {
                let index = result.indexOf(word);
                result.splice(index, 1);
            }

        } else if (command === 'print') {
            console.log(result.join(','));
        }
    }
}