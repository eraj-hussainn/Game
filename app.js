// RYU AND KULA
var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

// INITIAL POSITIONS
var left = 30;
var right = window.innerWidth - char2.offsetWidth - 30;

// INITIAL KULA POSITION
char2.style.left = right + "px";

// GIF LINKS

var ryuStand = "https://www.fightersgeneration.com/characters3/ryu-cvs2-stance.gif";

var ryuWalk = "https://www.fightersgeneration.com/np7/char/gifs/ryu/ryu-cfe-walkb.gif";

var kulaStand = "assest/gif/kula-kof13-stance.gif";

// TIMER VARIABLES
var ryuTimer;
var kulaTimer;


// RYU MOVEMENT
function animateChar(event) {

    // RIGHT ARROW
    if (event.code == "ArrowRight" && left < window.innerWidth - char1.offsetWidth) {

        left = left + 10;

        char1.style.left = left + "px";
        char1.style.transform = "scaleX(1)";

        char1.src = ryuWalk;

        clearTimeout(ryuTimer);

        ryuTimer = setTimeout(function () {
            char1.src = ryuStand;
        }, 300);
    }


    // LEFT ARROW
    if (event.code == "ArrowLeft" && left > 0) {

        left = left - 10;

        char1.style.left = left + "px";
        char1.style.transform = "scaleX(-1)";

        char1.src = ryuWalk;

        clearTimeout(ryuTimer);

        ryuTimer = setTimeout(function () {
            char1.src = ryuStand;
        }, 300);
    }


    // SPACE - JUMP
    if (event.code == "Space") {

        event.preventDefault();

        if (!char1.classList.contains("jump")) {

            char1.classList.add("jump");

            char1.addEventListener("animationend", function jumpEnd() {

                char1.classList.remove("jump");

                char1.removeEventListener("animationend", jumpEnd);

            });
        }
    }
}


// KULA MOVEMENT
function animateKula(event) {

    // A KEY - MOVE LEFT
    if (event.code == "KeyA" && right > 0) {

        right = right - 10;

        char2.style.left = right + "px";
        char2.style.transform = "scaleX(1)";

        // KULA WALKING GIF
        char2.src = "assest/gif/kula-kof13-walk.gif";

        clearTimeout(kulaTimer);

        kulaTimer = setTimeout(function () {
            char2.src = kulaStand;
        }, 300);
    }


    // D KEY - MOVE RIGHT
    if (event.code == "KeyD" && right < window.innerWidth - char2.offsetWidth) {

        right = right + 10;

        char2.style.left = right + "px";
        char2.style.transform = "scaleX(-1)";

        // KULA WALKING GIF
        char2.src = "assest/gif/kula-kof13-walk.gif";

        clearTimeout(kulaTimer);

        kulaTimer = setTimeout(function () {
            char2.src = kulaStand;
        }, 300);
    }
}


// KEYBOARD EVENT
document.addEventListener("keydown", function (event) {

    animateChar(event);
    animateKula(event);

});