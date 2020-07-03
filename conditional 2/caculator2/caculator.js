function show(num) {
    var number = document.getElementById('hien').value;
    number = number + num
    document.getElementById('hien').value = number;
}function operator() {
    document.getElementById('hien').value = eval(document.getElementById('hien').value)
}
function reseta() {
    document.getElementById('hien').value = "";

}