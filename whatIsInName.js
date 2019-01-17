function whatIsInAName(collection, source) {
  // the result array
  var arr = [];

  
  console.log(Object.entries(source))
  console.log(Object.entries(collection))
  // iterating over the bigger list, dealing with each object as 'obj'
  for (let obj of collection) {
    let allIn = true //setting the marker to true 
    //iterating over the smaller list as key:value pairs
    for (let otherItem of Object.entries(source)) {
      console.log("---", otherItem)
      // if key:value pairs of obj do not include the other item
      if (!Object.entries(obj).includes(otherItem)){
        allIn = false // then the marker is set to false
        console.log("!", obj.first)
        break; // and the loop breaks
      }
    }
    if (allIn = true) { // and only if the marker hasn't been set to false
      arr.push(obj) // then the result array is pushed with the object
    }
  }
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
