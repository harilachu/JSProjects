/******************************** Variable **************************************

var  
    - function scoped , not block scoped.
    - var created outside function scope creates global variable
    - var can be declared even at the end of the function, but can be used in the beginning.

hoisting
    - JS moves all variable declarations to top before executing code.

let
    - block scoped version of var
    - let variable created outside scope of function , doesnot create global variable

const
    - unlike var and let, const cannot be reassigned.
    
arrow function () =>
    - arrow function should not be used for object methods and constructors

IIFE
    - Immediately invocated function expression
    - ;(function () {})();
********************************************************************************/

////////////////////////////////////
//Template literal syntax ${} - evaluates inner expression
////////////////////////////////////
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

////////////////////////////////////
//Spread operator - expand an array
////////////////////////////////////
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

////////////////////////////////////
//iterate over the value
////////////////////////////////////
for (const v of ['a', 'b', 'c']) {
    console.log(v);
}

//get the index as well, using `entries()`
for (const [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(i, v);
}
console.log('////////////////////////////////////////////');
//object.values() - returns an array of values
const people = {
    name: "Jan",
    age: 30
}; //object
const peoplearr = [1, 2, 3]; //array
console.log(Object.values(people));
console.log(Object.values(peoplearr));

//object.entries() - returns an array of key , value pairs
console.log(Object.entries(people));
console.log(Object.entries(peoplearr));

console.log('////////////////////////////////////////////');
//Object.getOwnPropertyDescriptors
console.log(Object.getOwnPropertyDescriptors(people));

//Object.defineProperties - copies all the default properties also
const person1 = {
    set name(newName) {
        console.log(newName);
    }
};

const person3 = {};
Object.defineProperties(person3, Object.getOwnPropertyDescriptors(person1));

person1.name = 'x';
person3.name = 'x';

