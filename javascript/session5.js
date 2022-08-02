/**
 * // if.. else statement
// ternary operator => is partial if else 

// if statement
//syntax 

// if (condition) {
//     // body
// } 

let number = -1;

if (number > 0) {
    console.log("greater than zero")
}

// if ... else statement or ternary

if (number > 0) {
    console.log("greater than zero")
} else {
    console.log("Not greater than zero")
}

// if... else if

// if (condition1) {
//  // code block
// } else if(condition2) {
//     // code block
// } else if(condition3) {
//     // code block
// } else {
//     // code block
// }

if (number > 0) { // -2 > 0 => false
    console.log("greater than 0")
} else if ( number === 0) { // -2 === 0 => false
    console.log("number is zero");
} else {
    console.log("number is negative")
}

// Nested if.. else statement

const num = 8

if (num >= 0) {  //8 >=0 => true
    if (num === 0) {  // 8 === 0 => false
        console.log("number is zero");
    } else {
        console.log("greater than 0")
    }

} else {
    console.log("You have a entered a negative number")
}

// brackets are used to write multiple line of code
// you can omit {} if your conditon has only one statement

// space left at the side => indentation

if (num > 5) 
    console.log("greater than 5")
else 
    console.log("less than 5")


//==============================================================

//for loop
// syntax

// for (initialExpression; Condition; updateExpression ) {
//     // body
// }

// initial Epression 
// condition => loop runs until the condition is true
// update expression


// example

const n = 5;

// let i = 1; // initial expression

// if (i <= n)  // consition

// i ++ // updateInitial

for (let i = 0; i <= n; ++i ) {
    // console.log(i, "value of i");
    // console.log("I Love javascript")
    console.log(i)
    if (i === 1) {
        console.log("Covered 1 km")
    } else if ( i === 2) {
        console.log(" covered 2 km")
    } else if ( i === 3) {
        console.log(" covered 3 km")
    } else if ( i === 4) {
        console.log(" covered 4 km")
    } else {
        console.log(" Finished")
    }
}
*/

/**
 *  const Maths = 100;
    const Hindi = 100;
    const English = 100;
    const science = 100;
    const sst = 0;

    const total = Maths + Hindi + English + science + sst;
    console.log("The total marks scored is :", total);

    const percentage = total/5;
    console.log("The percentage of the student is: ", percentage);

    if (Maths < 33 || Hindi < 33 || English < 33 || science < 33 || sst < 33) {
        console.log("Failed")
    } else if (percentage <= 33) {
        console.log("Fail !")
    } else if (percentage > 33 && percentage <=40) {
        console.log("Third")
    } else if (percentage > 40 && percentage <= 60) {
        console.log("Second")
    } else {
        console.log("First")
    }
 */
// const num = 30

// if (num > 60) {
//     console.log("first")
// } else if(num > 60) {
//     if (num > 30 ) {}
// } else {
//     console.log("fail")
// }

// for (let i = 1; i <= 10; i ++) {
//     console.log(i)
// }

// print the table of 2
const n = 2;
for (let i = 1; i <= 10; i ++) {
    console.log(`${n} X ${i} = ${i*n}`)
}








