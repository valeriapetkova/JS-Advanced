function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    let finalYear = date.getFullYear();
    let finalMonth = date.getMonth() + 1;
    let finalDate = date.getDate();


    console.log(`${finalYear}-${finalMonth}-${finalDate}`);
}