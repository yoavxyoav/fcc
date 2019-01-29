function uniteUnique(arr) { // the function receives arrays (more than one). using 'arguements' to handle.
    if (seenBefore == undefined) {
        var seenBefore = []; //the accumulating array
    }
    for (let item of arguments) {
        if (Array.isArray(item)) {
            seenBefore.push(uniteUnique(...item));
        }
        else if (!seenBefore.includes(item)) {
            seenBefore.push(item);
        }
    }
    return seenBefore;
}
x = uniteUnique([1, 3, [6, 3], 2], [5, 2, 1, 4], [2, 1]);
console.log(x);

