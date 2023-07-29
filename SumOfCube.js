const numbers = [1, 2, 3, 4, 5, 6];
const sumOfCube = numbers.reduce((sum, currentValue) => {
  if (currentValue % 3 === 0) {
    return sum + Math.pow(currentValue, 3);
  }
  return sum;
}, 0);

console.log(sumOfCube);