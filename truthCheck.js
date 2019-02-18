function truthCheck(collection, pre) {
    let allThere = true
    for (let item of collection) {
        if (!item.hasOwnProperty(pre)) {
            return false
        } else if (item.hasOwnProperty(pre) && (item[pre] == false || item[pre] == null || item[pre] === NaN)) {
            return false
          
        }
    }
    return allThere;
  }
  
  
  let x = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": NaN}], "sex");

  console.log(x)
