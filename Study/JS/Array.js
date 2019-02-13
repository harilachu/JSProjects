/////////////////////////////////////
//Array.map() : executes a function for each value in the array and returns a result array
/////////////////////////////////////
const arr = [1, 2, 3];
const foo = function (value, index, arr) {
    return value * 2;
};

const brr = arr.map(foo);
console.log(brr);
console.log("////////////////////////////////////");

/////////////////////////////////////
//Array.every() : executes the function for each value and returns 
//                                                  - false if all value fails the condition.
//                                                  - true if all values pass the condition.
//Array.Some() : executes the function for each value and returns true if any value pass the condition.
//Array.filter() : filters the set using a conditional function
/////////////////////////////////////

const crr = [10, 20, 31, 41];
const boo = function (value) {
    return value % 10 == 0;
};

const drr = crr.every(boo);
const err = crr.some(boo);
console.log(drr);
console.log(err);
console.log("////////////////////////////////////");

////////////////////////////////////
//Iterator
////////////////////////////////////
const a = [1, 2, 3];
let it = a[Symbol.iterator]();
console.log(it.next().value); //1
console.log(it.next().value); //2
console.log(it.next().value); //3
////////////////////////////////////
//Entries - returns iterator of key, value pairs
////////////////////////////////////
let et = a.entries();
console.log(et.next().value); //[0, 1]
console.log(et.next().value); //[1, 2]
console.log(et.next().value); //[2, 3]
////////////////////////////////////
//Keys
////////////////////////////////////
let kt = a.keys();
console.log(kt.next().value); //0
console.log(kt.next().value); //1
console.log(kt.next().value); //2
console.log("////////////////////////////////////");
/*************************************
 * push - add elements at end
 * pop - removes elements at end
 * unshift - add elements at beginning
 * shift - remove elements from beginning
 * splice - gets elements starting from index
 ************************************/

////////////////////////////////////
//Sort
////////////////////////////////////
const sortarr = [1, 21, 2, 3, 10, 11];
const sortedarr = sortarr.sort();
console.log(sortedarr);

const sortedarr2 = sortarr.sort((a, b) => a - b);
console.log(sortedarr2);
console.log("////////////////////////////////////");

/////////////////////////////////////
//from , of - copy from existing array
/////////////////////////////////////
const copyarr = [21, 22, 23];
const copiedarr1 = Array.from(copyarr);
const copiedarr2 = Array.of(...copyarr);
const copiedarr3 = Array.from(copyarr, x => {
    if (x > 22) {
        return x;
    }
});
console.log(copiedarr1);
console.log(copiedarr2);
console.log(copiedarr3);