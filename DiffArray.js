function diffArray(arr1, arr2) {
  var a1 = [].concat(arr1);
  var a2 = [].concat(arr2);
  

  for (let item of arr1) {
    if (arr2.includes(item)) {
      a1.splice(a1.indexOf(item),1)
      a2.splice(a2.indexOf(item),1)
    }
  }
  
  return a1.concat(a2);
}
