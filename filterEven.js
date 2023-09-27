function filterEven(myArr) {

  for (let i = 0; i <= myArr.length; i++) {
    if (myArr[i] %2 === 0) {
      document.writeln(myArr[i]);
    }
  }
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));