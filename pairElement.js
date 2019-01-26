function pairElement(str) {

  function returnOther(char) {
    switch (char) {
      case "T":
        return "A";
      case "A":
        return "T";
      case "C":
        return "G";
      case "G":
        return "C";  
    }
  }

  let arr = str.split("")

  let pairedArr = arr.map( (item) => {
    return returnOther(item)
  })

  let finalArr = []
  for (let i in arr) {
    finalArr.push([arr[i], pairedArr[i]])
  }

  return finalArr
}
