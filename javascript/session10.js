// Break statement
// It is used to terminate the loop immediately 

// syntax

// for (init; condition; update) {
//     //code
//     if (condition to break) {
//         break;
//     }
// }

// while (condition) {
//     //code
//     if (condition to break) {
//         break;
//     }
// }

// example

for ( let i =0; i <= 5; i ++) {
    if (i === 3) {
        break;
    }
    console.log(i, "I")
}

let n=1;
while (n <= 10) {
    if (n === 7) {
        break;
    }
    console.log(n++, 'II')
}

// continue

// syntax

// for (init; condition; update) {
//     //code
//     if (condition to continue) {
//         continue;
//     }
// }

// while (condition) {
//     //code
//     if (condition to continue) {
//         continue;
//     }
// }

// example

for ( let i =0; i <= 5; i ++) {
    if (i === 3) {
        continue;
    }
    console.log(i, "IA")
}

 n=0;
while (n < 10) {
    n++;
    if (n === 7) {
        continue;
    }
    console.log(n, 'IIB')
}


// switch statement

// It is used for decision making

// switch(variable/expression) {
//     case value1:
//         // body
//         break;
//     case value2:
//         //body
//         break
//     default:
//         //body
// }

//example

let value = 4;

switch(value) {
    case 1:
        value = "one"
        break;
    case 2:
        value = 'Two'
        break;
    default:
        value = 'Not Found'
        break;
}

console.log("The value is", value)

