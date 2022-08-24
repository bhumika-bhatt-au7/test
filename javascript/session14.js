/**
 * toString()
 * join()
 * pop()
 * push()
 * shift()
 * unshift()
 * length
 * delete
 * concat()
 * splice()
 * slice()
 * includes()
 */

// var today = new Date(new Date().setHours(0,10,0,0));
// // today.setDate(0,0,0,0);
// var day = today.getDay();
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// console.log("Today is : " + daylist[day] + ".");
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// var prepand = (hour >= 12) ? " PM " : " AM ";
// hour = (hour >= 12) ? hour - 12 : hour;

// if (hour === 0 && prepand === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Noon';
//     }
//     else {
//         hour = 12;
//         prepand = ' PM';
//     }
// }
// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     }
//     else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }
// console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);

// console.log(new Date())

let arr = ['Bhumika', 'Divya', 'Kartik', 'Jiya', "ruchi", 'Nitin', "megha", 'Pradeep'];

// toString()
console.log(arr)
console.log(arr.toString());

// join()
console.log(arr.join(' : '));

// pop()
const arr1 = arr.pop();
const arr2 = arr.pop();
// console.log(arr1,arr2)
console.log(arr)

// push

const arr3 = arr.push('megha');
arr.push('Pradeep');
console.log(arr); // LIFO => Last In First Out

// shift

arr.shift();
arr.shift()
console.log(arr)

//unshift

arr.unshift('Divya')
console.log(arr)

//delete
delete arr[3]
console.log(arr[3])
console.log(arr);

//concat()
let arr_new = ['Apple', 'Mango', 'Banana', 'Grapes'];

const concattedArray = arr.concat(arr_new);
console.log(concattedArray);


// splice

// arr_new.splice(1,2);
console.log(arr_new)

//slice

const duplicate = arr_new.slice();
console.log(duplicate, arr_new);

const sliced = arr_new.slice(0, 2) // (start_index, last_index + 1)
console.log(sliced);

// includes => return true and false

console.log(arr_new.includes('Apple'));


// lastIndexOf

const age = [32, 10, 8, 2, 32, 10, 32, 65]

const lastIndex = age.lastIndexOf(31);

console.log(lastIndex)

// indexOf

const index = age.indexOf(32);

console.log(index)

//includes
console.log(age.includes(22));

//isArray

const text = 'Nitin';

console.log(Array.isArray(text));
console.log(Array.isArray(age));

// What are higher order functions?
// => functions that take another function as argument or return a fuction are called HOF.


// findIndex

function isOdd(number) {
    return number % 2 !== 0;
}

let numbers = [1, 9, 1, 3, 7];

let firstOdd = numbers.findIndex(isOdd);

console.log(firstOdd);

// find
function isEven(number) {
    return number % 2 == 0;
}

let firstEven = numbers.find(isEven);

console.log(firstEven);


//filter
numbers = [ 1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd)

console.log(evenNumbers);
console.log( oddNumbers);

// map
function square (number) {
    console.log(number ** 2);
    return number ** 2;
}

const squaredArray = numbers.map(square);

console.log(squaredArray);

//forEach

numbers.forEach(square)

//some

numbers = [4,6,2,8,10];

console.log(numbers.some(isEven));

// every

console.log(numbers.every(isEven));
