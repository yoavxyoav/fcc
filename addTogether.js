//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {
  console.log(arguments.length)
  for (let n of arguments) {
    if (typeof(n) != "number") {
      return undefined
    }
  }
  if (arguments.length === 2) {
    return arguments[0] + arguments[1]
  } else {
    let firstArg = arguments[0]
    return function (otherNum) {
      if (typeof otherNum != "number") {
        return undefined
      }
      return otherNum + firstArg
    }
  }
}

addTogether(2,3);
