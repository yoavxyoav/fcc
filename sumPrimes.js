//Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
  
  function isPrime(num) {
    if (num == 1) {
      return false
    }
    if (num == 2) {
      return true
    }
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true;
  }

  console.log(isPrime(1))

  let primeArr = []
  
  for (let i=1; i <= num; i++) {
    if (isPrime(i)) {
      primeArr.push(i)
    }
    console.log(primeArr)
  }

  let result = primeArr.reduce( (sum, currentValue) => sum + currentValue);
  console.log(result)
  return result
}

sumPrimes(10);
