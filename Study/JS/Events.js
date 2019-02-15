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
link.addEventListener('click', () => {
    prompt("Hello World");
});