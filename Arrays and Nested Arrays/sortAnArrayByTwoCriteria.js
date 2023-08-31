function sortAnArrayByTwoCriteria(input) {
    let sortedArr = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sortedArr.forEach(el => console.log(el));
}