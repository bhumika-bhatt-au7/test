// Count number of Vowels in String

function countVowel(name) {
    let count = 0
    name = name.toLowerCase();
    for (let i = 0; i < 7; i++ ) {
        if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u') {
            count ++;
        }
    }
    return count;
}

const total = countVowel('BHUMIKA') // .length => 7
console.log(total)

//  Write a function to check if an input string is a palindrome

function isPalindrome(value) {
    value = value + '';
    value = value.toLowerCase();
    let actualValue = value;
    let newValue = '';

    for (let i = value.length - 1; i >= 0; i--) {
        // console.log(typeof newValue)
        newValue += value[i];
    }
    // console.log(newValue)
    if (actualValue === newValue) {
        return true
    }
    return false;
}

const res = isPalindrome('bhumika');
console.log(res)

//toString();

// factorial

function factorial(num) { 
    if (isNaN(num)) {
        return 'Not a number';
    }

    num = Number(num);

    let total = 1;

    for (let i = num; i > 0; i--) {
        console.log(i)
        total *= i
    }

    return total;
}

const fac = factorial(10);
console.log(fac)


const year = 2000;
const month = "Feb";
let dayCount;

switch(month) {
    case 'Jan' || 'Mar' || 'May' || 'July' || 'Aug' || 'Oct' || 'Dec':
        dayCount = 31;
        break;
    case 'Apr' || 'June' || 'Sept' || 'Nov':
        dayCount = 30;
        break;
    case "Feb":
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            dayCount = 29;
            break;
        } else {
            dayCount = 28;
            break;
        }
    default: 
        console.log("Not a valid month")
}

console.log(dayCount)