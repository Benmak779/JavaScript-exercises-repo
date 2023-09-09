//Exercise eight - Print Pattern

let row = 4;
let string = "";

for(let i = 1; i <= row; i++) {
  
  for(let j = 1; j <= i; j++){
    string += "*";
  }
  string += "\n";
}
console.log(string);
