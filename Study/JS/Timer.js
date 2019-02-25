/////////////////////////////////
//SetTimeOut - execute a function at later specified time
/////////////////////////////////

/////////////////////////////////
//SetInterval - Executes a function repeatedly for every interval specified
//ClearInterval - clears the timer
/////////////////////////////////
let i = 1;
interval = setInterval(() => {
    console.log("Function executed " + i++);

    if(i==5)
    {
        clearInterval(interval);
    }
}, 2000);