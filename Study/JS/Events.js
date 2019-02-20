/* ********************************
old way of calling an event
<a href="site.com" onclick="dosomething();">A link</a>

New way to add many event handlers
window.addEventListener('load', () => {
    //window loaded
})
**********************************/

//////////////////////////
//Document events
/////////////////////////
const link = document.getElementById("demo");
link.addEventListener('click', (event) => {
    prompt("Hello World");
    event.stopPropagation(); //Stops bubbling or capturing (tunneling)
});

/////////////////////////
//Window Events - global events
/////////////////////////
window.addEventListener('load', () => {
    prompt("Hello World");
});

/////////////////////////
//Throttling - Events like scroll and mousemove will make the website sluggish.
// Some libraries like LodAsh provides throttling
/////////////////////////.

//The below code is just for understanding throttling
let cached = null;
window.addEventListener('scroll', event => {
    if (!cached) {
        setTimeout(() => {
            //you can access the original event at `cached`
            cached = null
        }, 100);
    }
    cached = event;
});

///////////////////////////////
//Event loops - has a control over the events (Sync/Async)
// priority of execution
// 1. Event Loops - all the calls are executed
// 2. Job queues (ES6)
// 3. Message Queue - all the event callbacks are executed
///////////////////////////////

//Promises (Async/Await) will be executed just before the settimeout (old async functions) 
const bar = () => console.log('bar');
const baz = () => console.log('baz');
const foo = () => {
    console.log('foo');
    setTimeout(bar, 0);
    new Promise((resolve, reject) =>
        resolve('should be right after baz, before bar')
    ).then(resolve => console.log(resolve));
    baz();
}

foo();