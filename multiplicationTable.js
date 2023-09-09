// Exercise three - Multiplication Table

var num = parseInt(prompt(`Enter an integer: `, ));
var range = parseInt(prompt(`Enter a range: `, ))

for(let i = 1; i <= range; i++) {
  let result = i * num;
  console.log(num +" * "+ i + " = " + result);
}
