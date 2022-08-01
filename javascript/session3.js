/**
 * comparision operators
 * Logical operators
 * ternary operator
 * template literals
 */

// comparision operators
// It is used to compare two values
// it return a boolean

/**
 * Equal to (==)
 * Not Equal to (!==)
 * strict Equal to (===)
 * Strict Not Equal to (!===)
 * Greater than (>)
 * less than (<)
 * greater than or equal to (>=)
 * less than or equal to (<=)
 */

console.log(20 == 10);
console.log(10 == 10);

console.log(20 !== 10);
console.log(10 !== 10);

console.log(10 == '10') // only checks the value
console.log(10 === '10') // checks the value and also the type (preferred)

console.log(10 > 20);
console.log(30 < 10);

console.log (10 <= 20);

let a = 'bhumika';
let b = 'bhumikaa';

console.log( a < b );

// Logical operators
// return true or false. 

/**
 * AND (&&)
 * OR (||)
 * NOT (!)
 */

const x = 10;
const y = 15;

(x > 5) && (y < 20)

//AND
// true && true  => true
// false && false => false 
// false && true => false

//OR
// true || true => true
// true || false => true
// false || false => false

// NOT 
// reverser the value 

console.log((10 > 5) && (6 < 10));
console.log((10 < 5) && (6 < 10));
console.log((10 < 5) && (6 > 10));


console.log((10 > 5) || (6 < 10));
console.log((10 < 5) || (6 < 10));
console.log((10 < 5) || (6 > 10));

console.log(!(10 < 5) && !(6 > 10));


// ternary operator(?:)

// const marks = 32;

// (marks > 33) ? console.log('Pass') : console.log('Fail');

// template literals
const mName = 'Bhumika'
const country = 'India';
const continent = 'Asia';
const language = 'Kumaoni'

const message = 'My name is' + ' ' + mName + ' ' + 'The name of my country is ' + ' ' + country;
console.log(message);

const tMessage = `My name is ${mName}. The name of my country is ${country}. The name of my continent is ${continent}. I speak in ${language}`
console.log(tMessage);


// Assignment sol

// let english = 50;
// let accountancy = 70;
// let business = 79;
// let economics = 30;
// let incomeTax = 20;
// let marks = english + accountancy + business + economics + incomeTax;
// const per = marks * 100/500
// // console.log(marks*100/500);
// console.log(marks);
// (per > 55) ? console.log('pass') : console.log('fail')


