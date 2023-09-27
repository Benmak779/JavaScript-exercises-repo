function countOdd(array){
  return array.filter(item => item % 2 != 0).length;
}

console.log(countOdd([1, 2, 3, 4, 5]));