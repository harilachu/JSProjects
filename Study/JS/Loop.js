/*****************************************
 *   While, do while, and for are same
 ****************************************/

///////////////////////
//Foreach
///////////////////////
const list = ['a', 'b', 'c'];
list.forEach((item, index) => {
    console.log(`${item} : ${index}`);
});

//index is optional
list.forEach(item => console.log(item));
console.log("//////////////////////////////////////");

////////////////////////
//for .. in - iterates over the property in object
////////////////////////
const aobj = {
    name: "jack",
    age: 20
}

//object
for (let property in aobj) {
    console.log(`${property} : ${aobj[property]}`); //object property name and value
}
//array
const arr = [1, 2, 3];
for (let v in arr) {
    console.log(v); //value
}

console.log("//////////////////////////////////////");

////////////////////////
//for .. of - iterates over the values from object array
////////////////////////
for (const a of [{
        name: "jill",
        age: 29
    }]) {
    console.log(`${a.name} : ${a.age}`);
}

for (const a of [11, 22, 33]) {
    console.log(`${a}`);
}