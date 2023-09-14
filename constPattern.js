let row = 5;
let sign = "";
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    sign += "*";
  }
  sign += "\n";
}
console.log(sign);
