function sumAll(arr) {

  let minVal = Math.min(...arr)
  let maxVal = Math.max(...arr)
  let newArr = new Array()
  for (let i = minVal; i <= maxVal; i++) {
    newArr.push(i)
  }


  return newArr.reduce( (sum, currentValue) => {
    return sum + currentValue
  })
}
