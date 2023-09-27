let arr = [1, 10, 3, 18, 22];
const result = arr.reduce(function(a, b) {
  return Math.max(a, b);
});
console.log(result);