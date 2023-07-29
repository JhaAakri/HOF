const numbers = [1, 2, 3, 4];
let sumOfOdd = 0;
numbers.reduce((sum, currentValue) => {
  if (currentValue % 2 !== 0) {
    sumOfOdd += currentValue;
  }
}, 0);
console.log(sumOfOdd);