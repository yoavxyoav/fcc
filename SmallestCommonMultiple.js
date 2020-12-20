function smallestCommons(arr) {
  if (arr[0] >  arr[1]) {
    arr.unshift(arr.pop())
  }

  let full_arr = []
  for (let n = arr[0]; n <= arr[1]; n++) {
    full_arr.push(n)
  }

  let smallest_multiplication = full_arr.slice(0, full_arr.length).reduce((a, b) => a * b)
  
  for (let starting_point = 1; starting_point < full_arr.length; starting_point++) {
    console.log(starting_point, full_arr.slice(starting_point, full_arr.length).reduce((a, b) => a * b))
    let multiplication = full_arr.slice(starting_point, full_arr.length).reduce((a, b) => a * b)
    console.log('multiplication:', multiplication)
    if (full_arr.slice(starting_point, full_arr.length).every( 
      (x) => {
        console.log('x:', x)
        multiplication % x == 0
      }
    )) {
      smallest_multiplication = multiplication
      console.log("smallest:", smallest_multiplication)
    } else {
      console.log('here')
      return smallest_multiplication
    }

  }

  return smallest_multiplication;
}


console.log(smallestCommons([5,1]));
