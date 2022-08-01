//  a. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country 
const country = 'India'; // string (''/ "")
const continent = 'Asia';
const population = 1300000000000;

console.log(country, continent, population);

// "The name of my country is India. The name of my continent is Asia. The population is 1300000000000"

//Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet.

const isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

// Set the value of 'language' to the language spoken where you live

language = 'Kumaoni';

//  If your country split in half, and each half would contain half the population, then how many people would live in each half?
// camelcasing => first word is small and then all the later word's first letter is capital.
let halfPopulation = population / 2;
// Increase the population of your country by 1 and log the result to the console.
const incrementedValue = halfPopulation + 1;
console.log(incrementedValue);

// operators

/**
 * Assignment operator (=)
 * Addition (+)
 * Subtraction (-)
 * multiplication (*)
 * division (/)
 * modulus (%)
 * exponential (**)
 */

/**
 * +=
 * -=
 * *=
 * /=
 * %=
 * **=
 */

let a = 10;
let b = 30;

// a = a + b;

console.log(a)

a += b;
//10 += 30;
//40
a -= b;
//40 -= 30;
// 10

console.log(a)


// String operators ( +, += );

const firstName = 'Nitin';
const lastName = 'Kawdal';
// to combine them //' concatination
// const fullName = firstName+lastName;
const fullName = firstName + "  " + lastName;
console.log(fullName)

// What a nice sunny day!

let subString1 = 'What a nice';
subString1 += ' sunny day!';
// 'What a nice' +=  ' sunny day!'
console.log(subString1);

// (number and number) or (string and string)

/**
 * comparision
 * logical
 * template literals // introduced in es6
 */








