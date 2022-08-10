// Question 1
const num1 = 30;
const num2 = 0;

let operation = 'division';

if (operation === 'add') {
    console.log("The sum of two numbers is:", num1 + num2); 
} else if (operation === 'subtract') {
    if (num1 > num2) {
        console.log("The difference of two numbers is:", num1 - num2);
    } else {
        console.log("The difference of two numbers is:", num2 - num1); 
    }  
} else if (operation === 'multiply') {
    console.log("The multiplication of two numbers is:", num1 * num2); 
} else if (operation === 'division') { 
    if (num2 === 0) {
        console.log("the answer will be infinite")
    } else {
        console.log("The division of two numbers is:", num1/num2); 
    }  
} else if (operation === 'modulus') {
    console.log("The mod of two numbers is:", num1 % num2); 
} else {
    console.log("Invalid operation")
}

// Question 2

// if year/4 the the remainder should be 0 and when divided by 100 then the remainer should not be 0.
// OR
// if the year is divided by 400 the remainder should be 0.

const year = 2000;

if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    console.log ("It is a leap year")
} else {
     console.log("It is not a leap year")
}

// Question 4

const month = 10;

if (month < 1 || month > 12) {
    console.log("Invalid month");
} else if (month === 2) {
    console.log("28 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(" 30 days")
} else {
    console.log("31 days")
}

// While loop

// while (condition) {
//     // body
// }

// let i = 0;

// while (i) {
//     console.log(i);
//     i -= 1
// }

// do .. while

// do {
//     console.log(i);
//     i += 1
// } while (i)

// example 

let sum = 0;
let number = 0;

do {
    sum += number;
    number = -400;
} while (number > 0);

console.log(number)

// print first 10 even numbers
// print first 10 odd numbers
// print first 10 natural numbers
// print first 10 whole numbers

let even = 2;

while( even <= 20) {
    console.log(even);
    even += 2;
}

let odd = 1;

while( odd <= 20) {
    console.log(odd);
    odd += 2;
}

let natural = 1
while (natural <= 10) {
    console.log(natural);
    natural++
}








