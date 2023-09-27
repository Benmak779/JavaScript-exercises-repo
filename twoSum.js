function twoSum(arr, total) {
  const sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (total == arr[i] + arr[j]) sum.push([arr[i], arr[j]]);
    }
  }
  return sum
}
console.log(twoSum([2, 7, 11, 15], 9));