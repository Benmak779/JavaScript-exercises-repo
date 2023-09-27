function findPrime(myArr) {
  let all = [], i, j, primes = [];
  for (let i = 2; i <= myArr; i++) {
    if (!all [i]) {
      primes.push(i);
      for (let j = i << 1; j <= myArr; j += i){
        all[j] = true;
      }
    }
  }
  return primes;
}
console.log(findPrime(10));