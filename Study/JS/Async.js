////////////////////////////////////
//Async await
////////////////////////////////////
function doSomethingAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000);
    });
}
async function doSomething() {
    console.log(await doSomethingAsync());
}

console.log('Before');
//Direct call
doSomethingAsync().then(response => console.log('Async function: ' + response));
//using async await
doSomething();
console.log('After');
console.log('///////////////////////////////////////////////');

////////////////////////////////////
//Multiple Async functions
////////////////////////////////////
function promiseToDoSomething() {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 2000);
    });
}
async function watchOverSomeoneDoingSomething() {
    const something = await promiseToDoSomething();
    return something + ' and I watched';
}
async function watchOverSomeoneWatchingSomeoneDoingSomething() {
    const something = await watchOverSomeoneDoingSomething();
    const ret = something + ' and I watched as well';
    console.log(ret);
    return ret;
}
watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res);
});

watchOverSomeoneWatchingSomeoneDoingSomething();