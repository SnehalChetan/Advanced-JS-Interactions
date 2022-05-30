/**
 * 
 */
// (() => {
   
// })();
(function() {

/*
*   Change mode of page on button click
*/

document.getElementById("mode").setAttribute("style","width:50px; height:50px; border:1px solid black; border-radius:50%;bottom:30px;right:30px;");

document.getElementById("mode").addEventListener("click",()=>{
    var body = document.querySelector("body");
    if (body.className !== 'toggled') {
        body.style.backgroundColor="black";
        body.style.color="white";
        body.className = 'toggled';
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color="black";
        body.className = '';
    }    
});






})();
// ul.nav > li {
//     display: inline;
// }