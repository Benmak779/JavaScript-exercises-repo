const number = 15;

for (let i = 1; i <= number; i++) {
  if(i === 0) {
    console.log(i +" "+ `is even number.`);
  }
  else if (i %2 === 0) {
    console.log(i +" "+ `is even number.`);
  }
  else {
    console.log(i +" "+`is odd number.`);
  }
}
