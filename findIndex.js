function findIndex(arr, num) {
  return arr.concat(num).sort((a, b) => a - b).indexOf(num); 
}

console.log(findIndex([10, 20, 30], 20));
