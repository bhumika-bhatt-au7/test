/**
 * write a javascript program to sort three numbers 
    numbers :: 3, -7, 2
    o/p => -7, 2, 3 or 3, 2, -7
 */

const x = -303;
const y = 4897;
const z = 258;

// check the first number and see if it it smaller than the other two number
// if yes
  // if 2nd is smaller than 3rd 
  // if yes
   // => console (x, y,z);
  //if no
   // => console.log(x, z, y);
// if no
  // check the second number and see if it it smaller than the other two number

if (x < y && x < z) {
    if (y < z) {
        console.log (x, y, z);
    } else  {
        console.log (x, z, y);
    }
} else if (y < x && y < z) {
    if (x <  z) {
        console.log(y, x, z);
    } else  {
        console.log(y, z, x);
    }
} else {
    if ( x < y) {
        console.log(z, x , y)
    } else  {
        console.log(z, y , x)
    }
}
// descending
if (x > y && x > z) {
    if (y > z) {
        console.log (x, y, z);
    } else  {
        console.log (x, z, y);
    }
} else if (y > x && y > z) {
    if (x >  z) {
        console.log(y, x, z);
    } else  {
        console.log(y, z, x);
    }
} else {
    if ( x > y) {
        console.log(z, x , y)
    } else  {
        console.log(z, y , x)
    }
}

//  Check if input variable is a number or not
/**
 * example
 * value = "25"
 * o/p => 25 is not a number
 * value = 7
 * o/p => 7 is a number
 */

// Check if a triangle is equilateral, scalene, or isosceles
/**
 * equilateral => all sides are equal
 * Isosceles => two sides are equal
 * scelene => all sides are different
 */

// Find if the a number is present in given range 
/**
 * example
 * num = 5
 * start = 2
 * end = 10
 */

// question1
const value = '19';

if (isNaN(value)) {
    console.log(`${value} is not a number`);
} else {
    console.log(`${value} is a number`);
}
// question2
const sideA = 20;
const sideB = 30;
const sideC = 20;

if (sideA === sideB && sideA === sideC) {
    console.log("Equilateral")
}

// question3

const num = 10;
const start = 10;
const end = 20;

if (num >= start && num <= end) {
    console.log("num is in range")
} else {
    console.log("num is not in range")
}


