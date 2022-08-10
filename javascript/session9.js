//  Write a while loop statement to print the following series
//105, 98, 91 ………7.

let num = 105;

while ( num >= 7) {
    console.log(num);
    num -= 7;
};


//  Write a program to print sum of first 10 Even numbers.

let sum = 0;
let i = 1
while (i <= 20) {
    if ( i%2 == 0) {
        sum += i;
    }
    i++;
}

console.log(sum);

//  Write a program to find the sum of all even numbers that falls between two numbers (exclusive both numbers) entered from the user using while loop.

const num1 = 20;
const num2 = 100;

let newSum = 0;
let count = 21;

while (count < num2) {
    if (count % 2 == 0) {
        newSum +=count;
    }
   count++;
}

console.log(newSum)
