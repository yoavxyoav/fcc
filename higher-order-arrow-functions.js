const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // takes the array values which are positive real numbers (by .filter) and squares them (by .map)
  const squaredIntegers = (arr.filter((n) => n > 0 && n == Math.floor(n))).map((x) => x*x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
