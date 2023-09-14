const arr = [21, 78];
let largest = 0;
for (i = 0; i <= arr.length; i++) {
  if (arr[i] > largest)  {
    largest = arr[i];
  }
}

console.log(largest);