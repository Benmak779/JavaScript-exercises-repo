//Exercise ten - Count Vowel


function  getCount(str) {
  let vowelsCount  = 0;
  const vowels =  ["a", "e", "i", "o", "u"];
  for(let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
const word = prompt(`Your input:: `);
const result = getCount(word);
console.log(result);