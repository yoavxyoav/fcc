function uniteUnique(arr) {
    var unique = []
    console.log([...arguments])
    for (var arg of [...arguments]) {
      for (var i of arg) {
        if (unique.includes(i) == false) {
          unique.push(i)
        }
      }
    }
  console.log(unique)
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
