function wordsUppercase(text) {
    let pattern = /\w+/g;

    let matched = text.match(pattern);
    let finalResult = matched.map(word => word.toUpperCase());
    console.log(finalResult.join(', '));
}