///////////////////
//Promise
///////////////////
const wait = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
});

wait().then(() => {
        console.log('I promised to run after 1s');
        return wait();
    })
    .then(() => console.log('I promised to run after 2s'));
//************************************************************* */

///////////////////
//Second example
///////////////////
let done = false

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built';
        resolve(workDone);
    } else {
        const why = 'Still working on something else';
        reject(why);
    }
});

isItDoneYet.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.error(err);
});
/**************************************************************** */

///////////////////
//Chaining promises
///////////////////
const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
};

const json = response => response.json();

fetch('JSON/todos.json')
    .then(status)
    .then(json)
    .then(data => {
        console.log('Request succeeded with JSON response', data);
        var jsonConv = JSON.stringify(data);
        console.log(jsonConv);
    })
    .catch(error => {
        console.log('Request failed', error);
    });
/**************************************************************** */

///////////////////
//Promise.all() - synchronizes multiple promises
///////////////////
const f1 = fetch('JSON/something.json');
const f2 = fetch('JSON/something2.json');

const json = response => response.json();

Promise.all([f1, f2])
    .then(res => {
        console.log('Array of results', res);

        return Promise.resolve(res[0]);
    })
    .then(json)
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });
/**************************************************************** */

///////////////////
//Promise.race() - runs as soon as one of the promises resolves first.
///////////////////
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promiseOne, promiseTwo]).then(result => {
    console.log(result); // 'two'
});