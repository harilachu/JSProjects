//Arrow functions 
const foo = () => DoSomething() 
const boo = () => { console.log("Inline arrow function"); }
const doo = (param) => { console.log("param value: " + param ); }

function DoSomething()
{
    prompt("Hello World");
}

foo()
boo()
doo(20)

