
function moveup() {
    let element = document.getElementById("ball");
    element.style.top = parseInt(element.style.top) - 5 + 'px';

}
function movedown(){
    let element = document.getElementById("ball");
    element.style.top = parseInt(element.style.top) + 5 + 'px';

}
function moveleft(){
    let element = document.getElementById("ball");
    element.style.left = parseInt(element.style.top) - 20 + 'px';

}
function moveright(){
    let element = document.getElementById("ball");
    element.style.left = parseInt(element.style.top) + 20 + 'px';

}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            moveleft();
            break;
        case 39:
            moveright();
            break;
        case 38:
            moveup();
            break;
        case 40:
            movedown();
            break;
    }
}
function ready() {
    window.addEventListener('keydown', moveSelection)

}