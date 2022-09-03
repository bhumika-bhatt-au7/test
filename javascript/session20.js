// Write a JavaScript function that reverse a number.

function reverse(number) {
    const str = number.toString();
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return Number(reversed)

}

console.log(reverse(32243));

// Write a JavaScript function that returns a passed string with letters in alphabetical order.

function sort(str) {
    const arr = str.split('');
    for (let x = 0; x <arr.length ; x++) {
        for (let y = x + 1; y <arr.length; y++) {
            if (arr[x] > arr[y]) {
               let temp =arr[x];
               arr[x] =arr[y];
               arr[y] = temp;
            }
        }
    }
    return arr.join('')
}

console.log(sort('webmaster'));

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

function longestString(str) {
    const arr = str.split(' ');

    let max = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
        const strLength = arr[i].length;

        if (strLength > max) {
            max = strLength;
            result = arr[i];
        }
    }

    return result;
}

console.log(longestString('Web Development Tutorial'));

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// function toUpper(str) {

// }

// today=new Date();
// console.log(today, "today")
// console.log(today.getFullYear(), "full year")
// var cmas=new Date(today.getFullYear(), 11, 25);
// console.log(cmas, "cmas")
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(one_day)
// console.log(cmas.getTime(), today.getTime())
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until Christmas!");