function smallestCommons(arr) {

  function multiArray(arr) {
    return arr.reduce((product, currentValue) => product * currentValue)
  }

  let multipliersArr = []

  for (let i = Math.max(...arr); i >= Math.min(...arr); i--) {
    multipliersArr.push(i);
  }
  console.log(multipliersArr)

  for (let i in multipliersArr) {
    let tempArr = [].concat(multipliersArr)
    tempArr.splice(i,1)
    console.log(tempArr)
    let product = multiArray(tempArr)
    console.log(product, multipliersArr[i])
    if (product % multipliersArr[i] == 0) {
      multipliersArr[i] = 1;
    }
  }
    


  let result = multiArray(multipliersArr)

  console.log(result)
  return result;
}


smallestCommons([1,7]);

