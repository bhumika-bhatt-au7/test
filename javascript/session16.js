// length
let sentence = 'I love javascript.';
console.log(sentence.length);

//replace
let result = sentence.replace('javascript.', 'programming');
console.log(result)

//indexOf
const index = sentence.indexOf('lo');
console.log(index);

//lastIndexOf
console.log(sentence)
const lastIndex = sentence.lastIndexOf('v');
console.log(lastIndex);

//startsWith
const res = sentence.startsWith('love');
console.log(res);

// endsWith
const resEnd = sentence.endsWith('javascript.');
console.log(resEnd);

// toUpperCase
const upper = sentence.toUpperCase()
console.log(upper)

//toLowerCase
const lower = sentence.toLowerCase()
console.log(lower);

//includes
const isPresent = sentence.includes('j', 9);
console.log(isPresent)

//charAt
const str = sentence.charAt(2)
console.log(str);

//charCodeAt => UTF-16 code
const charCode = sentence.charCodeAt(1);
console.log(charCode)

//substring
const subStr = sentence.substring(2, 8);
console.log(subStr)



