function arrayIntersection(arr1, arr2) {
  const firstSet = new Set(arr1);
  const secondSet = new Set(arr2);
  let myResult = [];
  for (let i of secondSet) {
    if (firstSet.has(i)) {
      myResult.push(i);
    }
  }
  return myResult;
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));