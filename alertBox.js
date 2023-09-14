const yourNum = parseInt(prompt(`Numbers: `));
let largestNum = 0;
for (let i = 1; i <= yourNum; i++) {
  if (i > largestNum) {
    largestNum = i;
  }
}

console.log(largestNum);