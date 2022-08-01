// Type conversion or Type coersion or type casting in javascript :: 

// It is of two types
// => implicit (Automatic)
// => explicit (Manual)

// Implicit conversion 

// 1. Implicit conversion to string

// Any numeric string added with  (+ )to  giives a string

let result;

result = '3' + 2; // '3' + '2' => '32' // firstName + lastNAme => 
console.log(result)

result = '3' + true 
console.log(result)

result = '4' + undefined;
console.log(result)

result = '4' + null;
console.log(result)


//any numeric string used with (-, / , * ) results to Number 

result = '4' - '2';
console.log(result)

result = '4' - 2;
console.log(result);

result = '4' * 2;
console.log(result)


// non numeric string used with (-, / , * ) result NaN

result = 'hello' - '4';
console.log(result);


// numeric string used with boolean changes it to number;
// true = 1
// false = 0
// null = 0

result = '4' - true;
console.log(result)

result = 4 + true;
console.log(result)

result = 4 + null;
console.log(result)

// undefined

//Arithematic operation of undefined with number, boolean or null gives NaN.

result = 4 + undefined
console.log(result);

// Explicit conversions

// 1. convert to Number Explicitly

result = '10';
console.log(typeof Number(result));

result = 'Hello';
console.log(Number(result))

// other explicit methods to change the value to type number 
/**
 * parseInt
 * parseFloat
 * Math.floor
 */

// 2. convert to String Explicitly
result = 324;
console.log(typeof String(result));

result = null // "null"
console.log(typeof String(null));

result = true // "null"
console.log(typeof result)
console.log(typeof String(result));

result = undefined;
console.log(typeof result)
console.log(typeof String(result));

// 3. convert to Boolean Explicitly

result = 234;
console.log( Boolean(result));

result = 0;
console.log( Boolean(result));

result = null;
console.log( Boolean(result));

result = undefined;
console.log( Boolean(result));

result = '';
console.log( Boolean(result));

result = NaN;
console.log( Boolean(result));

