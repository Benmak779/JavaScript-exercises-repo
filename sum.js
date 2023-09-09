//Exercise seven - Calculate sum

const  totalNum = parseInt(prompt(`Sum of: `));
let sum = 0;

for(let i = 0; i <= totalNum; i++) {

  sum += i;

}
console.log(`Sum: `, sum);
