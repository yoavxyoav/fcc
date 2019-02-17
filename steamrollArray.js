// Flatten a nested array. Accounts for varying levels of nesting.
function steamrollArray(arr) {
    function innerFunc (arr = arr, finalArr = []) {
        for (let e of arr) {
            
            if (Array.isArray(e)) {
            innerFunc(e, finalArr)
            } else {
            console.log(e)
            finalArr.push(e)
            console.log(finalArr)
            
            }
        }

        return finalArr
    }
  return innerFunc(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
