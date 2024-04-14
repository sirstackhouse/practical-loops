console.log("We LIVE!")


///// Part 1: Fizz Buzz

for (let a = 1; a < 101; a++) { //Loop increments to 100
    if (a % 15 === 0) console.log("FizzBuzz");
    else if (a % 5 === 0) console.log("Buzz");
    else if (a % 3 === 0) console.log("Fizz");
    else console.log(a);
}