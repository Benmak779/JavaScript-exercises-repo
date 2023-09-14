function isPrime(num) {
  if (num <= 1) {
      console.log(false);
  }
  else {
      for (let i = 2; i < num; i++) {
          if(num % i === 0) {
              console.log(false);
          }
      }
      console.log(true);
  }
}

console.log(isPrime(9));