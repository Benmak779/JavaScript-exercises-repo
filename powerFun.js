//Exercise nine - Simple Power Function


function numberToPower (number, power) {
  let total = 1;
  for(let i =1; i <= power;  i++) {
    total = total * number;
  }
  return total;
}

console.log(`2 ^ 4 = `, numberToPower(2, 4));
