function addTogether() {
  console.log(arguments.length)
  for (let n of arguments) {
    console.log(n, typeof(n))
    if (typeof(n) != "number") {
      return undefined
    }
  }

  console.log(arguments)
  if (arguments.length === 2) {
    console.log("!")
    console.log (arguments[0], arguments[1])
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

  cosnole.log("got here")
  return false;
}

addTogether(2,3);
