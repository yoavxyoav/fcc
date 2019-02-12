//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
function dropElements(arr, func) {

  let i = 0
  while (func(arr[i]) == false) {
    i += 1
  }

  arr = arr.slice(i)
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
