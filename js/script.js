

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


Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
