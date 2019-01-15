function destroyer(arr, ...args) {

  let newArr = []
  for (let item of arr) {
    if (!args.includes(item)) {
      newArr.push(item)
    }
  }
  console.log(newArr)
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
