//WAP to find maximum between two numbers.

const num1 = 20;
const num2 = 30;

if (num1 > num2) {
    console.log("num1 is greater");
} else {
    console.log("num2 is greater");
}

// WAP to check whether a number is divisible by 5 and 11 or not.

const number = 11;

if (number % 5 === 0 || number % 11 === 0) {
    console.log("Number is divisible by  5 or 11")
} else {
    console.log("Number is not divisible by both 5 and 11")
}

//  WAP to check whether a number is even or odd.

const anyNumber = 58;

if (anyNumber % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

//  WAP to calculate the sum of first 20 natural number.

let total = 0;

for (let i = 1; i < 11; i ++) {
    total +=  i;
}

console.log(total);

//1. WAP to display first 20 natural number and their num
// o/p => The first 20 natural number are : 1 2 3 4 5 6 .... 20
// the total is :  210

// write a javascript program to sort three numbers 
// numbers :: 3, -7, 2
// o/p => -7, 2, 3 or 3, 2, -7

console.log("The first 20 natural number are :");
let sum = 0;
for (let i = 1; i< 21; i++) {
    // console.log(i);
    console.log("before sum", sum, i)
    sum = sum + i;
    console.log(sum)
}

console.log("the total is:", sum)