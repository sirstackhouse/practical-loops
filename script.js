console.log("We LIVE!")


///// Part 1: Fizz Buzz

for (let a = 1; a < 101; a++) { //Loop increments to 100
    if (a % 15 === 0) console.log("FizzBuzz"); // Finds numbers divisible by 3 & 5. 3 * 5 = 15
    else if (a % 5 === 0) console.log("Buzz"); // Finds numbers divisible by 5
    else if (a % 3 === 0) console.log("Fizz"); // Finds numbers divisible by 3
    else console.log(a); // Outputs numbers NOT divisble by 5, 3, and 15
}

///// Part 2: Prime Time

// Attempt 1: Able to get prime numbers, can't figure out how to print just the next prime number
let n = 2

for (; n <= 20; n++) {
    let flag = 0;

    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        console.log(n)
    }
}

// Attempt 2: 
let x = 4;
while (x <= 20) {
    x++;

    if (x % 2 == 0) {
        break;
    }
    console.log(x)
}

// Attempt 3:
let j = 7

while (j % 2 == 0) {
    j++;

    if (j % 2 != 0) {
        break;
    } console.log(j)
}






///// Part 3: Feeling Loopy

const csvString = `
 ID,Name,Occupation,Age\n42,Bruce KNight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

let id = ["id", 42, 57, 63, 98];

