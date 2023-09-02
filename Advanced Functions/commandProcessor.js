function solution() {
    let text = '';
    
    let obj = {
        append(str) {
            text += str;
        },
        removeStart(num) {
            text = text.substring(num);
        },
        removeEnd(num) {
            text = text.substring(0, text.length - num);
        },
        print() {
            console.log(text);
        }
    }

    return obj;
}