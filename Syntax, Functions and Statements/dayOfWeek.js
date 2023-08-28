function dayOfWeek(text) {
    let arrDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (arrDays.includes(text)) {
        for (let i = 0; i < arrDays.length; i++) {
            if (arrDays[i] === text) {
                console.log(i + 1);
                break;
            }
        }
    } else {
        console.log('error');
    } 
}