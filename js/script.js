// Typewriter effect - Welcome

var welcomemsg = ["Hello, I am Ashley."];
var textPosition = 0;
var speed = 100;


typewriter = () => {
    document.querySelector("#welcomemessage").
    innerHTML = welcomemsg[0].substring(0, textPosition) + "<span>\u25ae</span>";
    if(textPosition++ != welcomemsg[0].length)
    setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);


