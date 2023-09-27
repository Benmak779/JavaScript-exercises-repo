function findMissingNumber(arrNum) {
  for (let i = 1; i <= arrNum.length; i++) {
    if (arrNum[i - 1]  !== i) {
      return i;
    }
  }
}
console.log(findMissingNumber([1, 2, 4, 5]));