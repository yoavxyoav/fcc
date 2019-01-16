function whatIsInAName(collection, source) {

  var arr = [];
  console.log(Object.entries(source))
  console.log(collection)

  for (let item of collection) {
    console.log("\n^^^ " + Object.entries(item))
    let allIn = true
    for (let otherItem of Object.entries(source)) {
      console.log("--- " + otherItem)
      if (!Object.entries(item).includes(otherItem)){
        allIn = false
        console.log("!", Object.entries(item))
        break;
      }
    }
    if (allIn = true) {
      arr.push(item)
    }
  }


  return arr;
}
