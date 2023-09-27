function findAverage(arr_) {
  let sum = 0;
  arr_.forEach(element => {
   sum += element;
  });
  return sum / arr_.length;
 }
 console.log(findAverage([1, 2, 3, 4, 5]));