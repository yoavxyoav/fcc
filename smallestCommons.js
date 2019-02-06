function smallestCommons(arr) {

  function multiArray(arr) {
    return arr.reduce ( (product, currentValue) => product * currentValue)
  }

  let multipliersArr = []

  for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    multipliersArr.push(i);

  for (let i in multipliersArr) {
    let product = multiArray([].concat(multipliersArr).splice(i,1))
    if (product % multipliersArr[i] == 0) {
      multipliersArr[i] = 1;
    }
  }
    
}

  let result = multiArray(multipliersArr)

  console.log(result)
  return result;
}


smallestCommons([1,6]);

