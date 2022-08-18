// Write a JavaScript program to sort the items of an array.

function sortArray(arr) {
   for (let x = 0; x < arr.length - 1; x++) {
       for (let y = x + 1; y < arr.length; y++) {

           if (arr[x] > arr[y]) {
               let temp = arr[x];
               arr[x] = arr[y];
               arr[y] = temp;
           }
       }
   }
   return arr
}

// sortArray([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]);

// Write a JavaScript program to find the most frequent item of an array.

function countFrequent(arr) {
    const countObject = {}

    for (let value of arr) {
       if (countObject[value]) {
           countObject[value] = countObject[value] + 1
       } else {
           countObject[value] = 1
       }
    }
    const keys = Object.keys(countObject);
    let element;
    let max = 0;

    for (let key of keys) {
        if (countObject[key] > max) {
            max = countObject[key];
            element = key;
        }
    }
    return `${element} ( ${max} times )`
}

// const res = countFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 'b', 'b', 'b', 'b', 'b', 'b', 'b' ]);


// Write a JavaScript program to remove duplicate items from an array

function removeDuplicate(arr) {
    const res = [];
    for (let value of arr) {
        if (!res.includes(value)) { 
            res.push(value);
        }
    }
    return res;
}

// const result = removeDuplicate([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 'b', 'b', 'b', 'b', 'b', 'b', 'b' ]);


// truthy and falsy

// "", null, 0, undefined, NaN => falsy

// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
 function removeFalsy (arr) {
    const res = [];

    for (let value of arr) {
        if (!value) {
            res.push(value)
        }
    }
    console.log(res)
 }

 removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null])