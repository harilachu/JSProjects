//Template literal syntax ${} - evaluates inner expression
const string = `something ${1 + 2 + 3}`;
const string2 = `something ${foo() ? 'x' : 'y' }`;

//Multiline strings
const string3 = `Hey
this
string
is awesome!`;

//Function with default parameters
function foo(index = 10, testing = true) {
    console.log(index);
    return testing;
}

console.log(`${string}  ${string2}`);
console.log(string3);

console.log('////////////////////////////////////////////');
//Spread operator - expand an array
const a = [1, 2, 3];
const b = [...a, 4, 5, 6];
console.log(b);

const hey = 'hey';
const spr1 = [...hey]; //string to character array
console.log(spr1);

console.log('////////////////////////////////////////////');
//passing array as function arguments
const funarray = [1, 2];

function arrayex(ar1, ar2) {
    console.log(`${ar1} ${ar2}`);
}

arrayex(...funarray);

console.log('////////////////////////////////////////////');
//iterate over the value
for (const v of ['a', 'b', 'c']) {
    console.log(v);
}

//get the index as well, using `entries()`
for (const [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(i, v);
}