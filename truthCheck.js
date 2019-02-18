// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(collection, pre) {
    for (let item of collection) {
        if (!item.hasOwnProperty(pre)) {
            return false
        } else if (item.hasOwnProperty(pre) && (item[pre] == false || item[pre] == null)) {
          return false
        } else if ( item.hasOwnProperty(pre) && item[pre] !== item[pre]) { // this line is important. isNaN() doesn't work, but checking if the variable is different than itself does.
          return false
          
        }
    }
    return true;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
