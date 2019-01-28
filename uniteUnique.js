function uniteUnique(arr) {
  
  let seenBefore = []
  
  console.log(typeof(seenBefore) == "object")

  for (let item of arr) {
    console.log(item)
    if (typeof(item) == "object") {
      console.log("it's an object!!")
      uniteUnique(item)
    } else if (!seenBefore.includes(item)) {
      seenBefore.push(item)
    }
  }
  
  console.log(seenBefore)
  return seenBefore;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
