const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        xhr.status === 200 ? console.log(xhr.responseText) : console.error('error');
    }
}

//Allows opening requests only within same domain name server
xhr.open('GET', 'http://127.0.0.1:5500/Study/Home.html#', true);

//not working
// xhr.setRequestHeader("Access-Control-Allow-Origin", "https://www.amazon.in/");
// xhr.setRequestHeader("Access-Control-Allow-Methods", "*");
// xhr.setRequestHeader("Content-Type", "text/html");

xhr.send();

////////////////////////////////////////////////////////////////
// Fetch API - Modern way of using XMLHttpRequests , not supported in IE
// https://github.com/github/fetch - polyfill used to support fetch api in all browsers
////////////////////////////////////////////////////////////////

console.log('/////////////////////////////////////////////////');
fetch('/JSON/todos.json').then(response => {
    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('Date'));

    for (const [i, v] of response.headers.entries()) {
        console.log(i, v);
    }
}).then(() => console.log('/////////////////////////////////////////////////'));


//////////////////////////////
//using async await
//////////////////////////////

(async () => {
    const response = await fetch('JSON/todos.json');
    const responsetxt = await response.text();
    console.log('/////////////////////////////////////////////////');
    console.log(responsetxt.toString());

    // const data = await response.json();
    // console.log(JSON.stringify(data));
    console.log('/////////////////////////////////////////////////');
})();

/////////////////////////////
//Request
/////////////////////////////
const request = new Request('JSON/todos.json', {
    headers: new Headers({
        'Content-Type': 'application/json'
    })
});

fetch(request);

///////////////////////////
// Post request
// Fetch never aborts a request. Use "Axios" library to support abort function
///////////////////////////
const options = {
    method: 'post',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'foo=bar&test=1'
};

fetch('http://127.0.0.1:5500/Study/Home.html#', options)
    .then(console.log('url post done'))
    .catch(err => {
        console.error('Request failed', err);
    });


//////////////////////////////
// AbortController & AbortSignal - used to abort the fetch request
//////////////////////////////
const controller = new AbortController();
const signal = controller.signal;

var i = 1;
fetch('http://127.0.0.1:5500/Study/Home.html#', {
        signal
    })
    .then(response => response.text())
    .then(data => {
        console.log('/////////////////////////////////////////////////');
        console.log("Fetch made second time");

        console.log(data.toString());
        console.log('/////////////////////////////////////////////////');
    })
    .catch(err => {
        if (err.name === 'AbortError') {
            console.error('Fetch aborted');
        } else {
            console.error('Another error', err);
        }
    });

//Aborting fetch
setTimeout(() => {
    controller.abort();
    console.log('Controller aborted');
}, 2000);