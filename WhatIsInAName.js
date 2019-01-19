function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (let obj of collection) {
    let allIn = true;
    Object.keys(source).forEach( (item) => {
      if (!(obj.hasOwnProperty(item) && obj[item] == source[item])) {
        allIn = false;
      }
    })

    if (allIn == true) {
      arr.push(obj)
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
