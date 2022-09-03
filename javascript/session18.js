// Create a function that returns only strings with unique characters.
//     Examples
//     filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
//     // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

//     filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

//     filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]

function filterUnique (arr) {
    const filteredArray = [];
    arr.forEach(function (value) {
        const splitted = value.split('');
        const actualLength = splitted.length;

        const arrWithoutDuplicates = [...new Set(splitted)];
        const newLength = arrWithoutDuplicates.length;

        if (actualLength === newLength) {
            filteredArray.push(value);
        }
    });

    return filteredArray;

}

const res1 = filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]);
const res2 = filterUnique(["88", "999", "989", "9988", "9898"]);
const res3 = filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]);
console.log(res1, res2, res3);

function filterUnique(arr) {
    const filteredArray = [];

    for (let i =0; i< arr.length; i++) {
        const actualLength = arr[i].length;

        const unique = [];
        for( let j = 0; j< arr[i].length; j++) {
            if (!unique.includes(arr[i][j])) {
                unique.push(arr[i][j])
            }

        }

        if (actualLength === unique.length) {
            filteredArray.push(arr[i])
        }
    }

    return filteredArray;
}

const res4 = filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]);
const res5 = filterUnique(["88", "999", "989", "9988", "9898"]);
const res6 = filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]);
console.log(res4, res5, res6);


// Create a function that takes an object and returns the keys and values as separate arrays.
//     Examples
//     keysAndValues({ a: 1, b: 2, c: 3 })
//     ➞ [["a", "b", "c"], [1, 2, 3]]

//     keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
//     ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function kNV(obj) {
    const res = [];
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    res.push(keys);
    res.push(values);

    return res
}

const finalResult = kNV({ a: "Apple", b: "Microsoft", c: "Google" })
console.log(finalResult);

// 'FOR" for Array 
function toCheckDifefrentFor(arr) {
    // for(let i = 0; i < arr.length; i++) {
    //     console.log(arr[i])
    // }

    // for (let value of arr) {
    //     console.log(value)
    // }

    // for (let i in arr) {
    //     console.log(arr[i])
    // }
}

// toCheckDifefrentFor([ 'Apple', 'Microsoft', 'Google' ]);

// 'FOR' for object

function toCheckDifefrentFor(obj) {
    const keys =  Object.keys(obj) // [a, b, c]
    // for(let i = 0; i <keys.length; i++) {
        // keys[i] // a, b, c
        // obj[a] // Apple
        // obj[b] // microsoft
        // obj[c] // Google

        // obj[keys[i]]
    //     console.log( obj [ keys [i] ] )
    // }

    // for (let value of keys) {
    //     console.log(obj[value])
    // }

    for (let i in obj) {
        console.log(obj[i])
    }
}

toCheckDifefrentFor({ a: "Apple", b: "Microsoft", c: "Google" });



