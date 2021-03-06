// (()=>{
//     document.querySelector('.carouselContainer').style.backgroundImage = 'url("./img/carousel/2.jpg")';
// })();

/**
 * parallax carousel
 */

let imgArray = ['./img/carousel/1.jpg','./img/carousel/2.jpg','./img/carousel/3.jpg','./img/carousel/4.jpg'];
const createCarousel = () => {
    document.querySelector('.carouselContainer').style.backgroundImage =  `url(\'${imgArray[imgArray.length-1]}\')`;
    let i = 0;
    function slide() {
        if(i == imgArray.length){
            i = 0;
        }
        console.log("imgArray[i++%imgArray.length] = value =  "+imgArray[i]);
        document.querySelector('.carouselContainer').style.backgroundImage = `url(\'${imgArray[i]}\')`;
        i++;
    }
    setInterval(slide, 4000);
}
createCarousel();
document.querySelector('.carouselContainer').setAttribute("style","background-attachment:fixed; background-position:center; background-repeat:no-repeat; background-size:cover;");

/*
*   Change mode of page on button click
*/

function changeMode(){
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
}
/**
 * collage modal
 */
/**
 * collage modal
 */

 document.querySelectorAll(".open-modal").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
        hideAllModalWindows();
        showModalWindow(this);
    });
});

document.querySelectorAll(".modal-hide").forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        hideAllModalWindows();
    });
});

document.querySelector(".modal-fader").addEventListener("click", function () {
    hideAllModalWindows();
});

function showModalWindow (buttonEl) {
var modalTarget = "#" + buttonEl.getAttribute("data-target");

document.querySelector(".modal-fader").className += " active";
document.querySelector(modalTarget).className += " active";
}

function hideAllModalWindows () {
var modalFader = document.querySelector(".modal-fader");
var modalWindows = document.querySelectorAll(".modal-window");

if(modalFader.className.indexOf("active") !== -1) {
    modalFader.className = modalFader.className.replace("active", "");
}

modalWindows.forEach(function (modalWindow) {
    if(modalWindow.className.indexOf("active") !== -1) {
        modalWindow.className = modalWindow.className.replace("active", "");
    }
});
}

/**
 *  show poke image on mouse over the pokemon name
 */

const pokeMouseOver = () => {
    document.querySelectorAll('.poke').forEach(poke=>{
        poke.addEventListener('mouseover', ()=>{
           poke.querySelector('img').style.visibility = 'visible';
           poke.querySelector('img').style. opacity = '1';
        });
    });
}
const pokeMouseOut = () => {
    document.querySelectorAll('.poke').forEach(poke=>{
        poke.addEventListener('mouseout', ()=>{
            poke.querySelector('img').style.visibility = 'hidden';
            poke.querySelector('img').style. opacity = '0';
        });
    });
}

pokeMouseOver();
pokeMouseOut();
/**
 * letters
 */
Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
