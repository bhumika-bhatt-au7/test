// function calculator (operation, num1, num2) {

// }

// calculator('add', 30, 40) // 70
// calculator('multiply, 7, 30') // 210

function sumOfEven(start, end) {
    let sum = 0

    for (let i = start; i<= end; i ++) {
        if ( i % 2 === 0) {
            sum = sum + i;
        }
    }

    return sum
}

const sum = sumOfEven(100, 200);
console.log(sum)