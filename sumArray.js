const arrNum = [1, 2, 3, 4];
const sumArray = arrNum.reduce(function(a, b)  {
  return a + b;
});

console.log(sumArray);