function uniteUnique(arr) {
    let seenBefore = []; //the accumulating array
    for (let item of arguments) {
        if (typeof (item) == "object") {
            uniteUnique(...item);
        }
        else if (!seenBefore.includes(item)) {
            seenBefore.push(item);
        }
    }
    return seenBefore;
}
