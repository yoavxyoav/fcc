//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.


function sumFibs(num) {
  
  let fibo = [1,1]

  while (fibo[fibo.length-1]+fibo[fibo.length-2] <= num) {
    fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2])
  }

  

  let result = fibo.filter( (item) => item % 2 != 0).reduce( (sum, currentVal) => sum + currentVal)


  console.log(fibo, "   ", result)
  

  return result;
}

sumFibs(14);
