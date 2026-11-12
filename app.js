// rhy----------------------------------

var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var left = 0;

function animateChar(event) {

    // RIGHT ARROW
    if (event.keyCode == 39 && left < 1120) {

        left = left + 10;

        char1.style.left = left + "px";
        char1.style.transform = "scaleX(1)";

        char1.src = "https://www.fightersgeneration.com/np7/char/gifs/ryu/ryu-cfe-walkb.gif";  //run

        setTimeout(() => {
            char1.src = "https://www.fightersgeneration.com/characters3/ryu-cvs2-stance.gif";  //stand
        }, 1000);
    }

    // LEFT ARROW
    if (event.keyCode == 37 && left > 40) {

        left = left - 10;

        char1.style.left = left + "px";
        char1.style.transform = "scaleX(-1)";

        char1.src = "https://www.fightersgeneration.com/np7/char/gifs/ryu/ryu-cfe-walkb.gif";   //run

        setTimeout(() => {
            char1.src = "https://www.fightersgeneration.com/characters3/ryu-cvs2-stance.gif";    //stand
        }, 1000);
    }
}


if (event.keyCode == 32){
    char1.src = "https://www.fightersgeneration.com/np7/char/gifs/ryu/ryu-cfe-super.gif"  //fire

}

// kula diamond----------------------------------------------------

var right = window.innerWidth - char2.offsetWidth - 40;

// KULA INITIAL POSITION
char2.style.left = right + "px";

function animateKula(event) {

    // A KEY - MOVE LEFT
    if (event.code == "KeyA" && right > 0) {

        right = right - 20;

        char2.style.left = right + "px";
        char2.style.transform = "scaleX(-1)";

        char2.src = "assets/gif/kula-kof13-walk.gif";   //walk

        setTimeout(() => {
            char2.src = "assets/gif/kula-kof13-stance.gif";   //stand
        }, 500);
    }

    // D KEY - MOVE RIGHT
    if (event.code == "KeyD" && right < window.innerWidth - char2.offsetWidth) {

        right = right + 20;

        char2.style.left = right + "px";
        char2.style.transform = "scaleX(1)";

        char2.src = "assets/gif/kula-kof13-walk.gif";

        setTimeout(() => {
            char2.src = "assets/gif/kula-kof13-stance.gif";
        }, 500);
    }
}
