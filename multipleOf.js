const num = 100;
for (let i = 1; i <= num; i++) {
    if (i %3 === 0 && i %5 === 0) {
        result = "FizzBuzz";
        console.log(result);
    }
    else if (i %3 === 0) {
        result = "Fizz";
        console.log(result);
    }
    else if (i %5 === 0) {
        result = "Buzz"
        console.log(result);
    }
    else {
        console.log(i);
    }
} 
