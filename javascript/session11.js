// Function
/**
 * Funtion is a block of code used to execute a certain task.
 */

//syntax

// function nameOfFunction () {
//     // body
// }

//example

function greet(name) {
    console.log(`Hello there! ${name}`)
}

greet('Bhumika');

function add(x, y) {
    console.log( x + y);
}

add(45, 97)

// return statement
function addWithReturn(x, y) {
    return x + y; // return means it is the end of the function
}

// const sum = addWithReturn(54, 101);
console.log(addWithReturn(54, 101))

// write a function to findSquare
// x = 2
// o/p = 4

// Write a function to convert Celsius to Fahrenheit
// formulae => (cel * 9/5) + 32

// find the area of a given Rectangle
// rectangleArea(length, breadth)

// find the area and perimeter of a Circle
// area => 22/7 * r * r
// parameter => 2 * 22/7 * r

function circleValues(r) {
    return (2*22/7*r , 22/7*r*r);
}

console.log(circleValues(5));

